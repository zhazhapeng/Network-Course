<template>
   <div id="container">
      <input type="checkbox" name="q[]" id="q1">
      <label for="q1">小宝3225</label>
      <input type="checkbox" name="q[]" id="q2">
      <label for="q2">王老白白白</label>
      <input type="checkbox" name="q[]" id="q3">
      <label for="q3">空夫31</label>
      <input type="checkbox" name="q[]" id="q4">
      <label for="q4">谷大白话</label>
      <input type="checkbox" name="q[]" id="q5">
      <label for="q5">Meathill</label>
      <input type="checkbox" name="q[]" id="q6">
      <label for="q6">一毛不拔大师</label>
      <hr>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data(){
      return {
       
      }
    },
   methods:{
		
	  },
    components:{
     
    }
  }
</script>

 <style scoped>
  #container {
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
  }
  #container input,
  #container label {
    order: 2;
  }
  input[type=checkbox]:checked,
  input[type=checkbox]:checked + label {
    order: 0 !important;
  }
  hr {
    display:none;
    order: 1;
    width:100%;
  }
  input[type=checkbox]:checked ~ hr {
    display:block;
  }
  input[type=checkbox] {
    display: none;
  }
  label {
    min-width: 120px;
    border: 1px solid #CCC;
    padding: 2px 8px;
    text-align: center;
    margin: 0 5px 5px 0;
    background: #FFF;
    color: #333;
    border-radius: 3px;
    box-sizing: border-box;
  }
  label:hover {
    border-color: #ADADAD;
    background: #EBEBEB;
    cursor: pointer;
  }
  input[type=checkbox]:checked + label {
    order: 0;
    background-color: #428BCA;
    border-color: #357EBD;
    color: #FFF;
  }
  input[type=checkbox]:checked + label:hover {
    background-color: #327681;
    border-color: #285E8E;
  }
  label:before {
    display: inline;
    content: "+ ";
    font-size: 100%;
  }
  input[type=checkbox]:checked + label:before {
    display: inline;
    content: "- ";
    font-size: 100%;
  }
  input[type=checkbox]:checked + label {
    -webkit-transition: background-color 1s;
    -moz-transition: background-color 1s;
    -ms-transition: background-color 1s;
    -o-transition: background-color 1s;
    transition: background-color 1s;
  }
  </style>