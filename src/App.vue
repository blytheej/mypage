<template>
  <div id="app">
    <ul id="nav">
      <li><router-link  to="/">Me</router-link></li>
      <li><router-link  to="/test">Test</router-link></li>
      <li><router-link  to="/jobshopper">Jobshopper</router-link> </li>
      <li><router-link  to="/project">Projects</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  #nav{
    list-style: none;
  }
  #nav li{
    display: inline-block;
    padding :20px;
  }
  #nav li a{
    text-decoration: none;
    color:white;
    font-size : 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: cornflowerblue;
  }

.router{

}

</style>
