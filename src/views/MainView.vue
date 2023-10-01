<template>
    <HeaderComponent/>
    <div class="card">
        <img src="../assets/img1.png" alt="фото с тренировки">
        <div>
            <h2>О нас</h2>
            <p class="card-content">
                Наша уютная студия находится по адресу:<br>
                <a href="">Москва, ул Большая Семеновская, 14</a><br><br>
                По всем вопросам звоните: <a href="">+7(999)999-99-99</a><br><br>
                Специальная цена на первое занятие 600 рублей
            </p>
            <button type="button">Позвонить</button>
        </div>
    </div>
    <div class="advantages">
        <h2>Наши преимущества</h2>
        <ul>
            <li>
                <img src="../assets/img2.png" alt="">
                <div>
                    <p class="title">Сильные преподаватели</p>
                    <p class="conent">Дипломированные инструкторы с большим опытом личной практики и преподавания</p>
                </div>
            </li>
            <li>
                <img src="../assets/img3.png" alt="">
                <div>
                <p class="title">Душевная атмосфера</p>
                <p class="conent">В нашей студии мы рады каждому<br>Приходите с любым физическим уровнем!</p></div>
            </li>
            <li>
                <img src="../assets/img4.png" alt="">
                <div>
                <p class="title">Уникальные системы тренировок</p>
                <p class="conent">Наши педагоги составили для вас тренировки, которые помогут расслабиться после тяжелого дня, но при этом улучшат вашу фигуру и силу</p>
                </div>
            </li>
            <li>
                <img src="../assets/img5.png" alt="">
                <div>
                <p class="title">Атмосфера и интерьер</p>
                <p class="conent">У нас вы можете насладиться не только дизайном в стиле буддийского храма, но и прекрасными ароматами трав и масел</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="reviews-wrapper">
        <div class="reviews">
            <h2>Отзывы клиентов</h2>
            <ul>
                <li>
                    <p class="info">Анатолий<br>26 лет</p>
                    <p class="comment">Обожаю вашу студию за прекрасную атмосферу! Прихожу сюда найти душевное спокойствие</p>
                    <p class="date">01.11.2022</p>
                </li>
                <li>
                    <p class="info">Алина<br>26 лет</p>
                    <p class="comment">Обожаю вашу студию за прекрасную атмосферу! Прихожу сюда найти душевное спокойствие</p>
                    <p class="date">01.11.2022</p>
                </li>
            </ul>
        </div>
        <button>Читать больше</button>
    </div>
    <div class="events">
        <h2>События студии</h2>
        <ul>
            <li>
                <p class="event-title">Стояние на гвоздях 19 окт</p>
                <p class="event-content">Приходите 19 октября на гвоздестояние и проверьте себя на смелость!</p>
            </li>
            <li>
                <p class="event-title">Психологическая игра 25 окт</p>
                <p class="event-content">Уже 25 октября состоится командная психологическая игра, которая отроем ваши истинные желания и корни тревог! Записывайся у администратора</p>
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

<style>
* {
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #F6F4EE;
    color: #3D3E37;
}

.card {
    max-width: 1230px;
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

.advantages {
    margin: 0 auto 0 70px;
    text-align: left;
    max-width: 870px;
}

.advantages h2 {
    font-size: 48px;
}

.advantages img {
    width: 104px;
    height: 100%;
}

.advantages div {
    margin: 0;
    margin-left: 30px;
    text-align: left;
}

.advantages ul {
    max-width: 870px;
    width: 100%;
    min-height: 930px;
    padding: 0;
}

.advantages li {
    margin: 72px 0;
    display: flex;
}

.title {
    font-size: 30px;
    margin-bottom: 28px;
}

.content {
    font-size: 26px;
    max-width: 700px;
    width: 100%;
    min-height: 104px;
}

.reviews {
    margin: 0 134px 0;
    text-align: left;
}

.reviews h2 {
    font-size: 48px;
    margin: 0;
    margin-bottom: 90px;
}

.reviews ul {
    margin: 0;
    padding: 0;
}

.reviews li {
    margin: 0;
    max-width: 720px;
    width: 100%;
    min-height: 270px;
}

.info {
    width: 160px;
    height: 82px;
    font-size: 26px;
    margin: 0 0 21px 0;
}

.date {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 110px;
}

.reviews-wrapper button {
    background-color: #555951;
    color: #F6F4EE;
    border-radius: 6px;
    max-width: 570px;
    width: 100%;
    height: 62px;
}

.events {
    margin: 0 134px 217px;
    text-align: left;
}

.events h2 {
    font-size: 48px;
    margin-top: 180px;
    margin-bottom: 130px;
}

.events ul {
    margin: 0;
    padding: 0;
}

.events li {
    margin: 0;
    max-width: 720px;
    width: 100%;
    min-height: 175px;
}

.event-title {
    font-size: 30px;
    margin-bottom: 28px;
}

.event-content {
    font-size: 26px;
    max-width: 700px;
    width: 100%;
    min-height: 104px;
    margin: 0;
}
</style>