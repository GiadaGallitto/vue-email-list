const {createApp} = Vue;

createApp({
    data(){
        return{
            randomEmail: null,
            emailList: []
        }
    },

    methods: {

    },
    
    mounted(){       
        for (i=0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((response) => {
                    console.log(response.data.response)
                    this.randomEmail = response.data.response
                    this.emailList.push(this.randomEmail)
                })
        }
    }
}).mount(`#app`)