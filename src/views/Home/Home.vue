<template>
  <div id="Home" class="home">
    <div style="background-size: 100% 100%; background-repeat:no-repeat; " :style="{ backgroundImage: 'url('  + require('../../content/img/Home/Img1.png') + ')' }">
      <div id="transparent" class="row" style="height: 100vh;">
        <div class="col-md-12 my-auto">
          <img src="./Index/Logo.svg" width="1000px">
          <h3 id="text">Recuerda tú decisión también cuenta</h3>
          <a href="/login">
            <button style="background-color:#1D7157; color: white;" class="btn" type="submit">¡A votar!</button>
          </a>
        </div>
      </div>
    </div>
 </div>
</template>
<style>
#transparent{
  background: linear-gradient(135deg, rgba(46, 52, 81, 0.4) 0%, rgba(52, 40, 104, 0.95) 100%)
}

#Home{
  overflow: hidden;
}

#text{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: rgba(255, 255, 255, 0.924);
  padding-top: 20px;
  text-shadow: 0.1em 0.1em #333
}

</style>








