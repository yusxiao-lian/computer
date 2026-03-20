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
          <i class="icon location"></i>
          <span>15th Floor, Innovation Building, No. 88, Science and Technology Park, Chaoyang District, Beijing</span>
        </div>
        <div class="info-item">
          <i class="icon phone"></i>
          <span>+86 10 8888 8888</span>
        </div>
        <div class="info-item">
          <i class="icon email"></i>
          <span>contact@example.com</span>
        </div>
        <div class="social-links">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <span>WeChat</span>
            </a>
            <a href="#" class="social-icon">
              <span>Weibo</span>
            </a>
            <a href="#" class="social-icon">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- 联系表单 -->
      <div class="contact-form">
        <h2>Send Message</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // 表单提交逻辑
      console.log('Form submitted:', this.form);
      // 这里可以添加实际的表单提交代码
      alert('Message sent successfully! We will reply to you as soon as possible.');
      // 重置表单
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
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