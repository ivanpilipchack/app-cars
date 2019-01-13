function car(name, year, model, owner, phone, image) {
    return {
        name,
        year,
        model,
        owner,
        phone,
        image
    }
}

const cars = [
    car('ford', '2017', 'focus', 'Ivan', '38 096 80 84 301', 'focus.jpg'),
    car('ford', '2018', 'mondeo', 'Max', '38 098 78 43 326', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4Ddi0vasc9K9d5D9OpAJJkbCB3PyiDcreAKBOTHXyS2tZ0hE'),
    car('chevrolet', '2019', 'fiesta', 'Vlad', '38 094 45 87 786', 'http://namonitore.ru/uploads/catalog/ford/cherniy_ford_f150_fx4_na_belom_fone_1600.jpg'),
    car('bmw', '2014', 'X6', 'Jonh', '38 045 67 64 432', 'https://www.bimmerfest.ru/wp-content/uploads/2013/03/BMW-Gran-Turismo-Luxury-Line-F34-3-GT.jpg'),
    car('mercedes', '2016', 'old', 'Vasiliy', '38 087 65 13 591', 'https://avatars.mds.yandex.net/get-pdb/1220848/d2759d1b-d81b-4dfd-bbf3-0971edb615a4/s1200'),
    car('porche', '2011', 'panomera', 'Andriy', '38 087 12 23 064', 'https://st.depositphotos.com/2528559/2846/i/950/depositphotos_28467419-stock-photo-yellow-car-on-white-background.jpg')

]

new Vue({
    el: '#app',

    data: {
        cars: cars,
        car: cars[0],
        currentCar: 0,
        phone: false,
        search: '',
        navbar: true,
        text: ''
    },
    methods: {
        selectCar: function(index) {
            this.car = cars[index]
            this.currentCar = index
        }
    },
    computed: {
        phoneBtn() {
            return this.phone ? 'hide phone' : 'show phone'
        },
        menuCar() {
            return this.navbar ? 'hide car' : 'show car'
        },
        count: function() {
            return this.text.length
        },
        filteredCars() {
            var self = this
            const filtered = this.cars.filter(function(car) {
                return car.name.indexOf(self.search) > -1 || car.model.indexOf(self.search) > -1 || car.year.indexOf(self.search) > -1
            })
            return filtered
        }
    }
})