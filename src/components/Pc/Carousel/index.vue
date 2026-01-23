<template>
  <div class="carousel-container" ref="carouselContainer" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="carousel-wrapper" :style="wrapperStyle">
      <!-- 复制最后一张到最前面（无缝滚动） -->
      <div v-if="showItems.length > 0" class="carousel-item">
        <img v-if="showItems[showItems.length - 1].image" v-lazy="showItems[showItems.length - 1].image" :alt="showItems[showItems.length - 1].title || 'Last Slide'" @load="onImageLoad">
        <div v-else class="carousel-content">
          <h3 v-if="showItems[showItems.length - 1].title">{{ showItems[showItems.length - 1].title }}</h3>
          <p v-if="showItems[showItems.length - 1].description">{{ showItems[showItems.length - 1].description }}</p>
        </div>
      </div>
      
      <!-- 原始轮播项 -->
      <div v-for="(item, index) in showItems" :key="index + 1" class="carousel-item">
        <img v-if="item.image" v-lazy="item.image" :alt="item.title || `Slide ${index + 1}`" @load="onImageLoad">
        <div v-else class="carousel-content">
          <h3 v-if="item.title">{{ item.title }}</h3>
          <p v-if="item.description">{{ item.description }}</p>
        </div>
      </div>
      
      <!-- 复制第一张到最后面（无缝滚动） -->
      <div v-if="showItems.length > 0" class="carousel-item">
        <img v-if="showItems[0].image" v-lazy="showItems[0].image" :alt="showItems[0].title || 'First Slide'" @load="onImageLoad">
        <div v-else class="carousel-content">
          <h3 v-if="showItems[0].title">{{ showItems[0].title }}</h3>
          <p v-if="showItems[0].description">{{ showItems[0].description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-prev" @click="prevSlide">←</button>
    <button class="carousel-next" @click="nextSlide">→</button>
    <div class="carousel-indicators">
      <span v-for="(item, index) in showItems" :key="index" 
            :class="['indicator', { active: index === realIndex }]" 
            @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
import banner_1 from '../../../assets/img/banner/banner_1.jpg';
import banner_2 from '../../../assets/img/banner/banner_2.jpg';
import banner_3 from '../../../assets/img/banner/banner_3.jpg';
import banner_4 from '../../../assets/img/banner/banner_4.jpg';
import banner_5 from '../../../assets/img/banner/banner_5.jpg';
import banner_6 from '../../../assets/img/banner/banner_6.jpg';

export default {
  name: 'Carousel',
  directives: {
    lazy: {
      inserted(el, binding) {
        // 简单的图片懒加载实现
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // 图片进入视口，设置src属性
              el.src = binding.value;
              // 停止观察
              observer.unobserve(el);
            }
          });
        }, options);
        
        observer.observe(el);
        
        // 组件卸载时清理
        el._lazyObserver = observer;
      },
      unbind(el) {
        if (el._lazyObserver) {
          el._lazyObserver.disconnect();
        }
      }
    }
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 1, // 从1开始，因为第一个是复制的最后一张
      autoplayTimer: null,
      _transitionTimer: null, // 用于跟踪过渡状态的定时器
      itemWidth: 0,
      transitionEnded: true,
      imagesLoaded: 0,
      totalImages: 0,
      items: [
        {
          image: banner_2,
        },
        {
          image: banner_1,
        },
        {
          image: banner_3,
        },
        {
          image: banner_4,
        },{
          image: banner_5,
        },{
          image: banner_6,
        },
      ]
    }
  },
  computed: {
    showItems() {
      return this.items || [];
    },
    realIndex() {
      // 真实的索引（减去复制的第一项）
      if (this.currentIndex === 0) {
        return this.showItems.length - 1;
      } else if (this.currentIndex === this.showItems.length + 1) {
        return 0;
      } else {
        return this.currentIndex - 1;
      }
    },
    wrapperStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: this.transitionEnded ? 'transform 0.5s ease-in-out' : 'none'
      }
    }
  },
  mounted() {
    // 初始化图片计数
    this.totalImages = this.showItems.length * 3; // 原始图片 + 前后复制的图片
    
    // 确保元素已渲染后再设置初始状态
    this.$nextTick(() => {
      this.itemWidth = this.$refs.carouselContainer.offsetWidth;
      
      // 监听过渡结束事件
      const wrapper = this.$refs.carouselContainer.querySelector('.carousel-wrapper');
      if (wrapper) {
        wrapper.addEventListener('transitionend', this.handleTransitionEnd);
        // 添加Webkit过渡结束事件监听（兼容性处理）
        wrapper.addEventListener('webkitTransitionEnd', this.handleTransitionEnd);
      }
      
      // 确保按钮点击功能立即可用
      this.transitionEnded = true;
      
      // 开始自动播放
      this.startAutoplay();
    });
    
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
      const wrapper = this.$refs.carouselContainer?.querySelector('.carousel-wrapper');
      if (wrapper) {
        wrapper.removeEventListener('transitionend', this.handleTransitionEnd);
        wrapper.removeEventListener('webkitTransitionEnd', this.handleTransitionEnd);
      }
      this.stopAutoplay();
      // 清除过渡定时器
      if (this._transitionTimer) {
        clearTimeout(this._transitionTimer);
      }
      window.removeEventListener('resize', this.handleResize);
    },
  methods: {
    startAutoplay() {
      // 确保自动播放功能正常工作
      if (this.autoplay && this.showItems.length > 1) {
        this.stopAutoplay(); // 先清除可能存在的定时器
        
        // 使用requestAnimationFrame确保动画流畅
        this.autoplayTimer = setInterval(() => {
          // 确保在过渡结束后才执行下一次滚动
          if (this.transitionEnded) {
            requestAnimationFrame(() => {
              this.nextSlide();
            });
          }
        }, this.interval);
      }
    },
    
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    },
    
    onImageLoad() {
      // 图片加载完成计数器
      this.imagesLoaded++;
      
      // 确保即使图片没有全部加载完成，轮播也能正常工作
      // 只要有一个图片加载完成，就允许过渡
      if (this.imagesLoaded > 0) {
        this.transitionEnded = true;
      }
    },
    
    nextSlide() {
      // 使用防抖机制，但添加强制恢复逻辑
      if (!this.transitionEnded) {
        // 防止快速点击导致的问题，但在极端情况下也要确保能继续操作
        // 添加一个安全检查，如果当前没有进行中的过渡定时器，则允许操作
        if (!this._transitionTimer) {
          this._forceResetTransition();
        } else {
          return;
        }
      }
      
      this.transitionEnded = false;
      
      // 添加边界检查，防止索引无限增长
      if (this.currentIndex < this.showItems.length + 1) {
        this.currentIndex++;
      } else {
        // 如果已到达最后，重置到第一张
        this.currentIndex = 1;
      }
      
      // 确保过渡结束事件能被触发
      this.$nextTick(() => {
        // 清除已存在的定时器，避免重复设置
        if (this._transitionTimer) {
          clearTimeout(this._transitionTimer);
        }
        
        // 手动触发过渡结束检查（针对某些特殊情况）
        this._transitionTimer = setTimeout(() => {
          if (!this.transitionEnded) {
            this.handleTransitionEnd();
          }
          this._transitionTimer = null;
        }, 600); // 稍微大于过渡时间
      });
    },
    
    prevSlide() {
      // 使用防抖机制，但添加强制恢复逻辑
      if (!this.transitionEnded) {
        // 防止快速点击导致的问题，但在极端情况下也要确保能继续操作
        // 添加一个安全检查，如果当前没有进行中的过渡定时器，则允许操作
        if (!this._transitionTimer) {
          this._forceResetTransition();
        } else {
          return;
        }
      }
      
      this.transitionEnded = false;
      
      // 添加边界检查，防止索引无限减少
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        // 如果已到达最前，重置到最后一张
        this.currentIndex = this.showItems.length;
      }
      
      // 确保过渡结束事件能被触发
      this.$nextTick(() => {
        // 清除已存在的定时器，避免重复设置
        if (this._transitionTimer) {
          clearTimeout(this._transitionTimer);
        }
        
        // 手动触发过渡结束检查（针对某些特殊情况）
        this._transitionTimer = setTimeout(() => {
          if (!this.transitionEnded) {
            this.handleTransitionEnd();
          }
          this._transitionTimer = null;
        }, 600); // 稍微大于过渡时间
      });
    },
    
    goToSlide(index) {
      // 使用防抖机制，但添加强制恢复逻辑
      if (!this.transitionEnded) {
        // 防止快速点击导致的问题，但在极端情况下也要确保能继续操作
        // 添加一个安全检查，如果当前没有进行中的过渡定时器，则允许操作
        if (!this._transitionTimer) {
          this._forceResetTransition();
        } else {
          return;
        }
      }
      
      this.transitionEnded = false;
      this.currentIndex = index + 1; // +1 是因为第一个是复制的
      
      // 确保过渡结束事件能被触发
      this.$nextTick(() => {
        // 清除已存在的定时器，避免重复设置
        if (this._transitionTimer) {
          clearTimeout(this._transitionTimer);
        }
        
        // 手动触发过渡结束检查（针对某些特殊情况）
        this._transitionTimer = setTimeout(() => {
          if (!this.transitionEnded) {
            this.handleTransitionEnd();
          }
          this._transitionTimer = null;
        }, 600); // 稍微大于过渡时间
      });
    },
    
    handleResize() {
      this.itemWidth = this.$refs.carouselContainer.offsetWidth;
    },
    
    handleTransitionEnd() {
      // 处理过渡结束事件
      // 检查是否需要重置索引位置（无缝滚动核心逻辑）
      if (this.currentIndex === this.showItems.length + 1) {
        // 到达最后一个复制元素（第一张的副本），重置到真实的第一张
        this.transitionEnded = false;
        this.currentIndex = 1;
        // 强制重绘但不使用过渡效果
        this.$nextTick(() => {
          this.transitionEnded = true;
        });
      } else if (this.currentIndex === 0) {
        // 到达第一个复制元素（最后一张的副本），重置到真实的最后一张
        this.transitionEnded = false;
        this.currentIndex = this.showItems.length;
        // 强制重绘但不使用过渡效果
        this.$nextTick(() => {
          this.transitionEnded = true;
        });
      } else {
        // 正常位置，直接允许下一次过渡
        this.transitionEnded = true;
      }
      
      // 清除过渡定时器，确保状态正确
      if (this._transitionTimer) {
        clearTimeout(this._transitionTimer);
        this._transitionTimer = null;
      }
    },
    
    /**
     * 强制重置过渡状态，用于极端情况下恢复轮播功能
     */
    _forceResetTransition() {
      // 立即设置过渡结束状态
      this.transitionEnded = true;
      
      // 清除所有定时器
      if (this._transitionTimer) {
        clearTimeout(this._transitionTimer);
        this._transitionTimer = null;
      }
      
      // 强制触发一次handleTransitionEnd，确保状态完全重置
      this.handleTransitionEnd();
    }
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 500px;
  background-color: #fff;
}

.carousel-wrapper {
  display: flex;
  height: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-content {
  text-align: center;
  padding: 20px;
}

.carousel-content h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.carousel-content p {
  font-size: 16px;
  color: #666;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.carousel-prev:hover,
.carousel-next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: white;
}
</style>