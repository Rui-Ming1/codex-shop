<script setup>
import { reactive, ref } from 'vue'

const isMenuOpen = ref(false)
const message = ref('')
const reservationForm = reactive({ date: '', guests: '', name: '' })
const navLinks = [
  { label: '今日菜单', href: '#menu' },
  { label: '关于拾味', href: '#story' },
  { label: '食味日志', href: '#journal' },
  { label: '联系与预约', href: '#visit' },
]
const dishes = [
  { tag: "CHEF'S CHOICE", name: '炭烤北海带鱼', price: '¥ 168', detail: '青梅 · 紫苏 · 海盐酱', image: 'image-one', large: true },
  { tag: 'SEASONAL', name: '金华火腿笋尖汤', price: '¥ 88', detail: '春笋 · 老母鸡 · 陈年花雕', image: 'image-two' },
  { tag: 'SIGNATURE', name: '慢烤伊比利亚猪', price: '¥ 238', detail: '桂花蜜汁 · 烟熏青豆 · 山胡椒', image: 'image-three' },
]
const closeMenu = () => { isMenuOpen.value = false }
function submitReservation() {
  message.value = `谢谢，${reservationForm.name}！已收到您的预约请求，我们会尽快与您确认。`
  reservationForm.date = ''
  reservationForm.guests = ''
  reservationForm.name = ''
}
</script>

<template>
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="拾味首页" @click="closeMenu"><span class="brand-mark">拾</span><span><b>拾味</b><small>SHIWEI DINING</small></span></a>
    <button class="menu-toggle" aria-label="打开导航" :aria-expanded="isMenuOpen" @click="isMenuOpen = !isMenuOpen"><span></span><span></span></button>
    <nav class="nav-links" :class="{ open: isMenuOpen }" aria-label="主导航">
      <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
      <a class="nav-reserve" href="#reserve" @click="closeMenu">预约座位 <span>→</span></a>
    </nav>
  </header>

  <main>
    <section class="hero"><div class="hero-image" role="img" aria-label="精致东方料理"></div><div class="hero-overlay"></div><div class="hero-content"><p class="eyebrow">EST. 2018 · SHANGHAI</p><h1>把季节，<br /><em>端上桌。</em></h1><p class="hero-copy">一席一味，拾起山野与海岸的鲜活滋味。<br />在城市中心，慢下来，好好吃顿饭。</p><div class="hero-actions"><a class="button button-primary" href="#reserve">预订一席 <span>→</span></a><a class="text-link" href="#menu">探索菜单 <span>→</span></a></div></div><div class="hero-note"><span>01</span><i></i><span>当季时味</span></div><div class="scroll-cue">SCROLL TO DISCOVER <span>↓</span></div></section>

    <section class="intro section-pad" id="story"><div class="section-label">01 / OUR PHILOSOPHY</div><div class="intro-grid"><h2>图是真图，<br /><em>香是真香。</em></h2><div class="intro-text"><p>我们相信，一道菜的灵魂始于食材抵达厨房的那一刻。拾味与全国 23 个小农场、渔港建立长期合作，只选当季最好的风物。</p><a class="arrow-link" href="#journal">认识我们的食材 <span>→</span></a></div></div><div class="stats"><div><strong>30</strong><span>合作农场与渔港</span></div><div><strong>24h</strong><span>从产地到餐桌</span></div><div><strong>7</strong><span>年专注一件事</span></div></div></section>

    <section class="menu-section section-pad" id="menu"><div class="section-heading"><div><div class="section-label">02 / FROM THE KITCHEN</div><h2>今日，<em>吃什么？</em></h2></div><a class="arrow-link" href="#reserve">查看完整菜单 <span>→</span></a></div><div class="dish-grid"><article v-for="dish in dishes" :key="dish.name" class="dish-card" :class="{ 'dish-large': dish.large }"><div class="dish-image" :class="dish.image"></div><div class="dish-meta"><div><span class="dish-tag">{{ dish.tag }}</span><h3>{{ dish.name }}</h3></div><b>{{ dish.price }}</b></div><p>{{ dish.detail }}</p></article></div></section>

    <section class="quote-section"><div class="quote-mark">“</div><blockquote>好的食物不需要<br /><em>解释太多。</em></blockquote><p>— 主厨 林知远</p></section>

    <section class="journal section-pad" id="journal"><div class="section-heading"><div><div class="section-label">03 / THE JOURNAL</div><h2>拾味 <em>手记</em></h2></div><a class="arrow-link" href="#journal">阅读更多 <span>→</span></a></div><div class="journal-grid"><article><div class="journal-image journal-one"></div><span>03.18.2024 · ORIGIN</span><h3>一颗春笋的 48 小时</h3></article><article><div class="journal-image journal-two"></div><span>02.26.2024 · PEOPLE</span><h3>去舟山，见一面老朋友</h3></article></div></section>

    <section class="reserve-section" id="reserve"><div class="reserve-copy"><div class="section-label">04 / YOUR TABLE AWAITS</div><h2>今晚，<br /><em>见面吗？</em></h2><p>周一至周日 · 17:30 — 23:00<br />上海市静安区愚园路 88 号</p></div><form class="reserve-form" @submit.prevent="submitReservation"><label>选择日期<input v-model="reservationForm.date" type="date" required /></label><label>用餐人数<select v-model="reservationForm.guests" required><option value="">请选择</option><option>2 位</option><option>3-4 位</option><option>5-8 位</option><option>8 位以上</option></select></label><label>您的称呼<input v-model="reservationForm.name" type="text" placeholder="怎么称呼您？" required /></label><button class="button button-light" type="submit">查询可用座位 <span>→</span></button><p class="form-message" role="status">{{ message }}</p></form></section>
  </main>

  <footer class="site-footer" id="visit"><div class="footer-brand"><span class="brand-mark">拾</span><div><b>拾味</b><small>SHIWEI DINING</small></div></div><div class="footer-links"><div><span>FOLLOW US</span><a href="#top">Instagram</a><a href="#top">小红书</a></div><div><span>CONTACT</span><a href="tel:+862160880888">+86 21 6088 0888</a><a href="mailto:hello@shiwei.cn">hello@shiwei.cn</a></div><div><span>ADDRESS</span><p>上海市静安区<br />愚园路 88 号</p></div></div><div class="copyright">© 2024 SHIWEI DINING <a href="#top">BACK TO TOP ↑</a></div></footer>
</template>
