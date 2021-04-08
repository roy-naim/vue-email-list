var app = new Vue(
  {
  el: '#root',
  data: {
    mails: []
  },

  methods: {
    mailRand: function () {
      this.mails = [];
      for (var i = 0; i < 10; i++) {
        let mail = ''
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          console.log(response.data.response);
          mail = response.data.response
          this.mails.push(mail);
        });

      }
    }
  }

  }
);
