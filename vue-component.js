window.addEventListener(("load"), () => {
  Vue.component("boxes", {
    props:['icon', 'text'],

    template: `
    <div class="col-sm-4 box">
      <i v-bind:class="icon"></i>
      <h2>Lorem Ipsum</h2>
      <p>{{text}}</p>
    </div>
    `

  });

  Vue.component("team",{
    props:["image", "name", "job", "mail", "phone"],
    template:`
    <div class="col-sm-3 profile">
        <img class="avatar" v-bind:src="image" alt="" width="150px;">
        <h3>{{name}}</h3>
        <i>{{job}}</i>
        <hr>
        <i style="color:#336699;" class="far fa-envelope"></i><span> {{mail}}</span><br>
        <i style="color:#336699;" class="fas fa-phone"></i> <span> {{phone}}</span>
    </div>

    `
  })

  new Vue({
    el: "#team"

  });
  new Vue({
    el:"#site-content"
  })


})
