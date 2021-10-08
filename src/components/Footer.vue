<template>
    <div class="footer-basic">
    <footer>
            <div class="social">
              <a href="mailto: angelammclaughlin@gmail.com"><font-awesome-icon icon="envelope-square" /></a>
              <a href="https://www.instagram.com/gabeandangela/"><font-awesome-icon :icon="[ 'fab', 'instagram' ]" /></a>
              <a href="https://www.linkedin.com/in/angela-mclaughlin-609b2856/"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]" /></a>
              </div>
            <p class="copyright">Gabe&Angie Co. © 2020</p>
        </footer>
    </div>
</template>

<script>

export default {
  name: 'Footer',

  }
</script>

<style scoped>
.footer-basic {
  padding:40px 0;
  background-color:rgb(19, 108, 167);
  color:#4b4c4d;
  border-radius: 10px;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin:0 8px;
  color:white;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:white;
  margin-bottom:0;
}
</style>