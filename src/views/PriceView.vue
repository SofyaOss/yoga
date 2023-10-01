<template>
    <HeaderComponent/>
    <div class="card">
            <img src="../assets/img6.png" alt="фото с тренировки">
            <div>
                <h2>Скидка на первое занятие</h2>
                <p>
                    Специальная цена на первое<br> занятие 600 рублей
                </p>
                <button>Записаться</button>
            </div>
    </div>
    <div class="subscription">
        <div>
            <h2>Абонементы</h2>
            <ul>
                <li>4 занятия - 5000 р</li>
                <li>8 занятий - 8000 р</li>
                <li>12 занятий - 12 000 р</li>
                <li>Безлимит - 18 000 р</li>
            </ul>
            <!-- <p class="sub-content"></p>
            <p class="sub-content"></p>
            <p class="sub-content"></p>
            <p class="sub-content"></p> -->
            <button type="submit">Купить абонемент</button>
        </div>
        <img src="../assets/img7.png" alt="фото с тренировки">
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

<style>
* {
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #F6F4EE;
    color: #3D3E37;
    font-family: Abel;
    font-size: 28px;
}

.card {
    max-width: 1170px;
    width: 100%;
    min-height: 417px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.card img {
    margin: 0;
}

.card div {
    max-width: 575px;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
}

.card p {
    margin: 0;
}

.card h2 {
    margin: 0;
}

.card button {
    background-color: #555951;
    color: #F6F4EE;
    border-radius: 6px;
    max-width: 570px;
    width: 100%;
    height: 62px;
}

.subscription {
    display: flex;
    justify-content: space-between;
    max-width: 1070px;
    width: 100%;
    margin: 180px auto;
}

.subscription h2 {
    font-size: 48px;
    margin: 0;
}

.subscription div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    min-height: 530px;
    margin: 0;
    max-width: 420px;
    width: 100%;
}

.subscription ul {
    min-height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    text-align: left;
    list-style-type: none;
}

.subscription li {
    margin: 0;
}

.subscription img {
    max-width: 526px;
    width: 100%;
    height: 100%;
    margin: 0;
}

.subscription button {
    background-color: #555951;
    color: #F6F4EE;
    border-radius: 6px;
    max-width: 420px;
    width: 100%;
    height: 62px;
    font-size: 26px;
    margin: 0;
}
</style>