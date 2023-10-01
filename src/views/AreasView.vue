<template>
    <HeaderComponent/>
    <div class="areas">
        <h2>Направления</h2>
        <ul>
            <li>
                <img src="../assets/img8.jpg" alt="">
                <div>
                    <p class="title">Хатха-йога</p>
                    <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </li>
            <li>
                <img src="../assets/img9.jpg" alt="">
                <div>
                    <p class="title">Кундалини-йога</p>
                    <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </li>
            <li>
                <img src="../assets/img10.jpg" alt="">
                <div>
                    <p class="title">Йога в гамаках</p>
                    <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </li>
        </ul>
    </div>
    <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
// import CardComponent from '@/components/CardComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>
* {
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #F6F4EE;
    font-family: Abel;
    font-size: 28px;
}

.areas {
    max-width: 1022px;
}

h2 {
    font-size: 48px;
    margin-bottom: 80px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    display: flex;
    justify-content: space-between;
    max-width: 1022px;
    width: 100%;
    margin-bottom: 100px;
}

li div {
    max-width: 624px;
    width: 100%;
}

.title {
    margin-bottom: 28px;
    font-size: 48px;
}
</style>