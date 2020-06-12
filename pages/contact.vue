<template>
  <div class="login-content">
    <h1>Get In Touch</h1>

    <form action="#">
      <!-- <img src="img/avatar.svg"> -->
          <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <input type="text" class="input" placeholder="Name">
                </div>
            </div>
            <br>
            <div class="input-div pass">
                <div class="i"> 
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="div">
                  <input type="text" class="input" placeholder="Email">
                </div>
            </div>
        <input type="submit" class="btn" value="Contact Me!">
    </form>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome to the life of Andrew",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All Andrew all the time"
        }
      ]
    };
  }
};
</script>

<style>
/* purge ignore */
.div {
  color: #d9d9d9;
}
.login-content{
	text-align: center;
}

form{
  display: inline-block;
  width: 360px;
}

.login-content img{
    height: 100px;
}

.login-content h2{
	margin: 15px 0;
	/* color: #333; */
	text-transform: uppercase;
	font-size: 2.9rem;
}

.login-content .input-div{
	position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one{
	margin-top: 0;
}

.i{
	/* color: #d9d9d9; */
	display: flex;
	justify-content: center;
	align-items: center;
}

.i i{
	transition: .3s;
}

.input-div > div{
  position: relative;
	height: 45px;
}

.input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	font-size: 18px;
	transition: .3s;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #ff7eee;
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div.focus > div > h5{
	top: -5px;
	font-size: 15px;
}

.input-div.focus > .i > i{
	color: #ff7eee;
}

.input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
}

.input-div.pass{
	margin-bottom: 4px;
}

a{
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: .3s;
}

a:hover{
	color: #df49a6;
}

.btn{
	display: inline-block;
	width: 50%;
	height: 40px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #ff7eee, #df49a6, #ff7eee);
	background-size: 200%;
	color: #fff;
	text-transform: uppercase;
	margin: 3rem 0;
	cursor: pointer;
	transition: .5s;
}
.btn:hover{
	background-position: right;
}
/* purge ignore */
</style>