<template>
  <div class="contact-page">
    <!-- 页面标题 -->
    <div class="hero-section">
      <h1>Contact Us</h1>
      <p>We look forward to hearing from you</p>
    </div>
    
    <!-- 主要内容 -->
    <div class="contact-content">
      <!-- 联系信息 -->
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="info-item">
          <i class="icon email"></i>
          <span>contact: ellafff001@gmail.com</span>
        </div>
        <div class="social-links">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/8618814109741" class="social-icon wechat">WhatsApp</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eldesignweddinginvitation" class="social-icon weibo">Instagram</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/El-Design-Wedding-Invitation/61580327604321/" class="social-icon linkedin">Facebook</a>
          </div>
        </div>
      </div>
      
      <!-- 联系表单 -->
      <div 
        v-loading="loading"
        element-loading-text="Wait for a moment....."
        element-loading-spinner="el-icon-loading" 
        class="contact-form">
        <h2>Send Your Message</h2>
        <!-- <form> -->
          <div class="form-group">
            <label for="name">Name<span class="red-status">*</span></label>
            <el-input v-model="form.title" type="text" id="name" maxlength="100" placeholder="Please enter your name"></el-input>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <el-input v-model="form.email" id="email" maxlength="100" placeholder="Please enter your email"></el-input>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <el-input v-model="form.phone" type="text" id="phone" maxlength="100" placeholder="Please enter your phone number"></el-input>
          </div>
          <div class="form-group">
            <label for="whatTime">The Date of wedding</label>
            <el-date-picker v-model="form.whatTime" type="date" id="whatTime" placeholder="Pick a day"></el-date-picker>
          </div>
          <div class="form-group">
            <label for="country">Where are you from<span class="red-status">*</span></label>
            <el-select v-model="form.country" filterable  type="select" id="country">
              <el-option
                v-for="item in countrys"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="form.otherCountry" maxlength="100" style="margin-top: 10px;" v-if="form.country === 'others'" type="text" id="otherCountry" placeholder="Please enter your country"></el-input>
          </div>
          <div class="form-group">
            <label for="message">leave a message</label>
            <textarea id="message" v-model="form.message" maxlength="400" rows="2" placeholder="Please leave a message"></textarea>
          </div>
          <div class="form-group">
            <label for="captcha">Verification Code<span class="red-status">*</span></label>
            <div style="display: flex; align-items: center; gap: 10px;">
              <input v-model="form.captcha" maxlength="4" type="text" id="captcha" placeholder="Please enter verification code" style="flex: 1;">
              <div class="captcha-image" @click="generateCaptcha">
                <img :src="captchaImage" alt="Verification Code" style="cursor: pointer; height: 40px; border-radius: 4px;">
              </div>
            </div>
          </div>
          <button @click="submitForm" class="submit-btn">Send Your Message</button>
        <!-- </form> -->
      </div>
    </div>
    <hFiveBottom></hFiveBottom>
  </div>
</template>

<script>
import enLocale from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
// 设置Element UI的语言为英文
locale.use(enLocale);
import hFiveBottom from "@/components/common/hFiveBottom.vue";
export default {
  components: {
    hFiveBottom
  },
  data() {
    return {
      countrys: [
        {value: 'United States', label: 'United States'},
        {value: 'Canada', label: 'Canada'},
        {value: 'Australia', label: 'Australia'},
        {value: 'New Zealand', label: 'New Zealand'},
        {value: 'United Kingdom', label: 'United Kingdom'},
        {value: 'France', label: 'France'},
        {value: 'Netherlands', label: 'Netherlands'},
        {value: 'Belgium', label: 'Belgium'},
        {value: 'Luxembourg', label: 'Luxembourg'},
        {value: 'Ireland', label: 'Ireland'},
        {value: 'Norway', label: 'Norway'},
        {value: 'Sweden', label: 'Sweden'},
        {value: 'Finland', label: 'Finland'},
        {value: 'Denmark', label: 'Denmark'},
        {value: 'Germany', label: 'Germany'},
        {value: 'Switzerland', label: 'Switzerland'},
        {value: 'Austria', label: 'Austria'},
        {value: 'Italy', label: 'Italy'},
        {value: 'Spain', label: 'Spain'},
        {value: 'Portugal', label: 'Portugal'},
        {value: 'Greece', label: 'Greece'},
        {value: 'Slovenia', label: 'Slovenia'},
        {value: 'Hungary', label: 'Hungary'},
        {value: 'Saudi Arabia', label: 'Saudi Arabia'},
        {value: 'United Arab Emirates', label: 'United Arab Emirates'},
        {value: 'Qatar', label: 'Qatar'},
        {value: 'Kuwait', label: 'Kuwait'},
        {value: 'Egypt', label: 'Egypt'},
        {value: 'others', label: 'others'},
      ],
      loading: false,
      form: {
        title: '',
        email: '',
        phone: '',
        whatTime: '',
        message: "",
        country: "",
        otherCountry: "",
        captcha: ""
      },
      // 验证码相关
      captchaImage: '',
      captchaCode: ''
    };
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
   mounted() {
    // 检查emailjs是否加载
    if (window.emailjs) {
      window.emailjs.init("8KVJ8ZchGRAcQzue5");
    } else {
      console.error("emailjs is not loaded");
    }
    // 生成验证码
    this.generateCaptcha();
  },
  methods: {
    // 生成验证码
    generateCaptcha() {
      // 生成4位随机验证码
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let code = '';
      for (let i = 0; i < 4; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      this.captchaCode = code;
      
      // 生成验证码图片
      const canvas = document.createElement('canvas');
      canvas.width = 120;
      canvas.height = 40;
      const ctx = canvas.getContext('2d');
      
      // 背景
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 干扰线
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }
      
      // 验证码文字
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < code.length; i++) {
        ctx.fillStyle = `rgb(${Math.random() * 100 + 50}, ${Math.random() * 100 + 50}, ${Math.random() * 100 + 50})`;
        ctx.fillText(code[i], 20 + i * 25, 20);
      }
      
      this.captchaImage = canvas.toDataURL('image/png');
    },
    submitForm() {
      // 表单提交逻辑
      if(!this.form.title) {
        this.$message.warning('Please enter your name.');
        return;
      }
      if(!this.form.email && !this.form.phone) {
        this.$message.warning('Kindly leave your email or phone number.');
        return;
      }
      // 邮箱格式校验
      if(this.form.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(this.form.email)) {
          this.$message.warning('Please enter a valid email address.');
          return;
        }
      }
      // 手机号格式校验（只允许数字和+）
      if(this.form.phone) {
        const phoneRegex = /^[0-9+]+$/;
        if(!phoneRegex.test(this.form.phone)) {
          this.$message.warning('Phone number can only contain digits and +.');
          return;
        }
      }
      // 验证码校验
      if(!this.form.captcha) {
        this.$message.warning('Please enter verification code.');
        return;
      }
      if(this.form.captcha.toUpperCase() !== this.captchaCode) {
        this.$message.warning('Invalid verification code.');
        this.generateCaptcha(); // 重新生成验证码
        return;
      }
      if(!this.form.country) {
        this.$message.warning('Please enter your country.');
        return;
      }
      if(this.form.country === 'others' && !this.form.otherCountry) {
        this.$message.warning('Please enter your country.');
        return;
      }
      if (window.emailjs) {
        this.loading = true;
        // 使用emailjs发送邮件 
        window.emailjs.send('service_m9q1exx', 'template_37s5xtw', this.form)
        .then((response) => {
          this.loading = false;
          alert('Message sent successfully! We will reply to you as soon as possible.');
          // 重置表单
          this.form = {
            title: '',
            email: '',
            phone: '',
            whatTime: '',
            message: "",
            country: "",
            otherCountry: "",
            captcha: ""
          };
          // 重新生成验证码
          this.generateCaptcha();
        }).catch((error) => {
          this.loading = false;
          alert('Failed to send message. Please try again later.');
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    }
  }
};
</script>

<style scoped>
.red-status {
  color: red;
}
.contact-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #f5f5f5;
}

/* 英雄区域 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 30px;
}

.hero-section h1 {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.hero-section p {
  font-size: 1rem;
  max-width: 90%;
  margin: 0 auto;
  opacity: 0.9;
}

/* 主要内容 */
.contact-content {
  padding: 0 20px;
  margin-bottom: 30px;
}

/* 联系信息 */
.contact-info {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
}

.contact-info h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.3rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.info-item i {
  font-size: 1.1rem;
  color: #667eea;
  margin-right: 12px;
  min-width: 20px;
}

.info-item span {
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
}

.social-links {
  margin-top: 20px;
}

.social-links h3 {
  margin-bottom: 12px;
  font-size: 1rem;
  color: #333;
}

.social-icons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.social-icon {
  flex: 1;
  min-width: 80px;
  padding: 10px;
  background: #667eea;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

/* 联系表单 */
.contact-form {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.3rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  color: #555;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.submit-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
}

/* 地图区域 */
.map-section {
  padding: 0 20px;
  margin-bottom: 30px;
}

.map-section h2 {
  text-align: center;
  margin-bottom: 15px;
  color: #333;
  font-size: 1.3rem;
}

.map-placeholder {
  background: white;
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.map-placeholder p {
  color: #666;
  font-size: 1rem;
}

/* 响应式调整 */
@media (max-width: 480px) {
  .hero-section {
    padding: 50px 15px;
  }
  
  .hero-section h1 {
    font-size: 1.8rem;
  }
  
  .contact-content,
  .map-section {
    padding: 0 15px;
  }
  
  .contact-info,
  .contact-form {
    padding: 20px;
  }
  
  .info-item span {
    font-size: 0.85rem;
  }
  
  .social-icon {
    min-width: 70px;
    padding: 8px;
    font-size: 0.8rem;
  }
  
  .map-placeholder {
    height: 250px;
  }
}
</style>