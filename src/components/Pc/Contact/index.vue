<template>
  <div class="contact-page">
    
    <!-- 主要内容 -->
    <div class="contact-content">
      <!-- 联系信息 -->
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="info-item">
          <i class="icon location"></i>
          
        </div>
        <div class="info-item">
          <i class="icon phone"></i>
         
        </div>
        <div class="info-item">
          <i class="icon email"></i>
          <span>contact: ellafff001@gmail.com</span>
        </div>
        <div class="social-links">
          <h3>Follow Us</h3>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/8618814109741" class="social-icon wechat">WhatsApp</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eldesignweddinginvitation" class="social-icon weibo">Instagram</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/El-Design-Wedding-Invitation/61580327604321/" class="social-icon linkedin">Facebook</a>
        </div>
      </div>
      
      <!-- 联系表单 -->
      <div 
        v-loading="loading"
        element-loading-text="Wait for a moment....."
        element-loading-spinner="el-icon-loading" 
        class="contact-form">
        <h2>Send Your Message</h2>
        <form>
          <div class="form-group">
            <label for="name">Name<span class="red-status">*</span></label>
            <el-input v-model="form.title" maxlength="100" type="text" id="name" placeholder="Please enter your name"></el-input>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <el-input v-model="form.email" maxlength="100" placeholder="Please enter your email"></el-input>
          </div>
          <div class="form-group">
            <label for="subject">Phone</label>
            <el-input v-model="form.phone" maxlength="100" type="text" id="subject" placeholder="Please enter your phone number"></el-input>
          </div>
          <div class="form-group">
            <label for="message">The Date of wedding</label>
            <el-date-picker
              v-model="form.whatTime"
              type="date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              :picker-options="{
              disabledDate(time) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return time.getTime() < today.getTime();
                },
              }"
              placeholder="Pick a day">
            </el-date-picker>
          </div>
          <div class="form-group">
            <label for="subject">Where are you from<span class="red-status">*</span></label>
            <el-select v-model="form.country" placeholder="Select">
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
            <el-input type="textarea" v-model="form.message" maxlength="400" id="message" rows="2" placeholder="Please leave a message"></el-input>
          </div>
          <button @click="submitForm" type="submit" class="submit-btn">Send Your Message</button>
        </form>
      </div>
    </div>
    
    <Bottom />
  </div>
</template>

<script>
import Bottom from "../../common/bottom.vue";
import 'element-ui/lib/theme-chalk/index.css';
import enLocale from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
// 设置Element UI的语言为英文
locale.use(enLocale);
export default {
  components: {
    Bottom,
  },
  data() {
    return {
      countrys: [
        {value: 'United States', label: 'United States'},
        {value: 'United Kingdom', label: 'United Kingdom'},
        {value: 'France', label: 'France'},
        {value: 'Germany', label: 'Germany'},
        {value: 'Spain', label: 'Spain'},
        {value: 'Italy', label: 'Italy'},
        {value: 'Portugal', label: 'Portugal'},
        {value: 'Switzerland', label: 'Switzerland'},
        {value: 'Austria', label: 'Austria'},
        {value: 'Belgium', label: 'Belgium'},
        {value: 'Netherlands', label: 'Netherlands'},
        {value: 'Denmark', label: 'Denmark'},
        {value: 'Norway', label: 'Norway'},
        {value: 'Sweden', label: 'Sweden'},
        {value: 'Finland', label: 'Finland'},
        {value: 'Ireland', label: 'Ireland'},
        {value: 'Greece', label: 'Greece'},
        {value: 'China', label: 'China'},
        {value: 'India', label: 'India'},
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
        otherCountry: ""
      }
    };
  },
   mounted() {
    // 检查emailjs是否加载
    if (window.emailjs) {
      window.emailjs.init("8KVJ8ZchGRAcQzue5");
    } else {
      console.error("emailjs is not loaded");
    }
  },
  methods: {
    submitForm() {
      // 表单提交逻辑
      console.log('Form submitted:', this.form);
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
      // if(!this.form.whatTime) {
      //   this.$message.warning('Please enter The Date of wedding.');
      //   return;
      // }
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
          this.$message.success('Message sent successfully! We will reply to you as soon as possible.');
          // 重置表单
          this.form = {
            title: '',
            email: '',
            phone: '',
            whatTime: '',
            message: "",
            country: "",
            otherCountry: ""
          }
        }).catch((error) => {
          this.loading = false;
          this.$message.error('Failed to send message. Please try again later.');
        });
      } else {
        this.$message.error('Failed to send message. Please try again later.');
      }
    },
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
  background: url('../../../assets/img/home/contactUs.jpg') no-repeat -205px top;
  background-size: cover;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 111px;
  padding-top: 222px;
}

/* 联系信息 */
.contact-info {
  min-height: 700px;
  margin-bottom: 30px;
  position: relative;
  left: 25%;
  /* left: 40%; */
  min-width: 300px;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  padding-top: 0;
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
  padding-top: 0;
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