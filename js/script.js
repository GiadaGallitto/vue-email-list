const {createApp} = Vue;

createApp({
    data(){
        return{
            randomEmail: null,
        }
    },

    methods: {

    },

    mounted(){

        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((response) => {
                console.log(response.data.response)
                this.randomEmail = response.data.response
            })
    }
}).mount(`#app`)