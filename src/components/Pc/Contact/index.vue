<template>
  <div class="contact-page">
    <!-- 页面标题 -->
    <div class="hero-section">
      <h1>Contact Us</h1>
      <p>We look forward to hearing from you, whether it's questions, suggestions, or cooperation opportunities</p>
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
          <a href="#" class="social-icon wechat">WeChat</a>
          <a href="#" class="social-icon weibo">Weibo</a>
          <a href="#" class="social-icon linkedin">LinkedIn</a>
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
    
    <Bottom />
  </div>
</template>

<script>
import Bottom from "../../common/bottom.vue";
export default {
  components: {
    Bottom,
  },
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
}

/* 英雄区域 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 80px 20px;
  margin-bottom: 50px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 700;
}

.hero-section p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
}

/* 主要内容 */
.contact-content {
  background: url('../../../assets/img/home/contactUs.jpg') no-repeat center center;
  background-size: cover;
  padding-top: 163px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  /* max-width: 1200px; */
  margin: 0 auto 50px;
  /* padding: 0 20px; */
}

/* 联系信息 */
.contact-info {
  margin-bottom: 30px;
  position: relative;
  left: 25%;
  min-width: 300px;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
  color: #333;
  margin-bottom: 25px;
  font-size: 1.5rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.info-item i {
  font-size: 1.2rem;
  color: #667eea;
  margin-right: 15px;
  min-width: 20px;
}

.info-item span {
  color: #555;
}

.social-links {
  margin-top: 30px;
}

.social-links h3 {
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #333;
}

.social-icon {
  display: inline-block;
  padding: 10px 15px;
  margin-right: 10px;
  background: #667eea;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #764ba2;
  transform: translateY(-2px);
}

/* 联系表单 */
.contact-form {
  position: relative;
  left: 25%;
  min-width: 300px;
  width: 28%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.contact-form h2 {
  color: #333;
  margin-bottom: 25px;
  font-size: 1.5rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
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
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
}

/* 地图区域 */
.map-section {
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 0 20px;
}

.map-section h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 1.5rem;
}

.map-placeholder {
  background: #f8f9fa;
  height: 400px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.map-placeholder p {
  color: #666;
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
  
  .hero-section {
    padding: 60px 20px;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .contact-info,
  .contact-form {
    width: 100%;
  }
}
</style>