 function openCity(evt, cityName) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " active";
 }

 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();


 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyD03w3Qr1QbTjEgdFhl62NFDcQFkjDUqFg",
     authDomain: "tiktokchat-c824d.firebaseapp.com",
     databaseURL: "https://tiktokchat-c824d-default-rtdb.firebaseio.com",
     projectId: "tiktokchat-c824d",
     storageBucket: "tiktokchat-c824d.appspot.com",
     messagingSenderId: "36622945518",
     appId: "1:36622945518:web:269a50fa006284559737ff"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 /*------------------------------------------------------------------------------------------------------------*/
 document.getElementById('login').onclick = function() {
     var userEmail = document.getElementById('email_field').value;
     var userPass = document.getElementById('password_field').value;
     firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
         .then(() => {


         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             swal({
                 title: "Başarısız!",
                 text: "Böyle bir kimlik numarası veya kullanıcı adı bulunmaktadır.",
                 icon: "warning",
                 buttons: "Tamam",
             });
         });
 }
 firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
         $("#anasayfa_div").hide();
         $("#kayıtol_div").hide();
         $("#login_div").hide();
         $("#anapanel").show()
         var user = firebase.auth().currentUser;
         if (user != null) {
             var email_id = user.email;
             document.getElementById('user_para').innerHTML = email_id;
         }
     } else {
         $("#anasayfa_div").hide();
         $("#kayıtol_div").show();
         $("#login_div").hide();
         $("#anapanel").hide();
     }
 });
 /*------------------------------------------------------------------------------------------------------------*/

 function anonim() {
     $("#anasayfa_div").hide();
     $("#kayıtol_div").hide();
     $("#login_div").show();
     $("#anapanel").hide();
 }




 function gonder() {

     var adsoyad = document.getElementById('adsoyad').value;
     var email_fi = document.getElementById('email_fi').value;
     var password_fi = document.getElementById('password_fi').value;
     var gizliyim = document.getElementById('gizliliksozlesmesi');
     var göz = document.getElementById('reus').innerHTML = gizliyim.checked ? "Onaylandı" : "Onaylanmadı";
     var yaş = document.getElementById('yas').value;
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     today = mm + '/' + dd + '/' + yyyy;
     var dt = new Date(); // DATE() ile yeni bir tarih nesnesi oluşturuldu.
     var saat = dt.getHours();
     var dakika = dt.getMinutes();
     var saniye = dt.getSeconds();
     if (adsoyad != "" && email_fi != "" && password_fi != "" && yaş != "" && göz == "Onaylandı") {
         firebase.database().ref('register/').push().set({
             AdSoyad: adsoyad,
             Email: email_fi,
             createdDate: today + dt,
             Şifresi: password_fi,
             DoğumTarihi: yaş,
             security: göz
         });
         swal({
             title: "ÖNEMLİ BİLGİ!",
             text: "Başvuru Formunuz Alındı Ücret Tahsil Etmeniz Gerekmektedir. Satın Al Kısmından Kayıt Olduğunuz E-Postanız ile Satın Al Sayfasında Aynı E-Postayı Kullanmanız Gereklidir. Aksi Halde Onay Verilmeyecektir...",
             icon: "info",
             button: "Tamam",
         });
         var adsoyad = document.getElementById('adsoyad').value = "";
         var email_fi = document.getElementById('email_fi').value = "";
         var password_fi = document.getElementById('password_fi').value = "";

     } else {
         swal({
             title: "Başarısız!",
             text: "Lütfen gerekli alanları doldurunuz!",
             icon: "warning",
             buttons: "Tamam",
         });
     }


 }





 document.getElementById('typedText').value = "";


 function getRandIndex(maxLength) {
     return Math.floor(Math.random() * maxLength);
 }
 var data;

 function getCaptcha() {
     var canvas = document.getElementById('canvas');
     var pen = canvas.getContext('2d');
     var captch = Math.random().toString(36).substring(2, 8);
     document.getElementById('result').innerHTML = "Yenile";
     pen.font = "30px Georgia";
     pen.fillStyle = "grey";
     pen.fillRect(0, 0, 400, 400);
     pen.fillStyle = "orange";
     maxLength = captch.length;
     index1 = getRandIndex(maxLength);
     index2 = getRandIndex(maxLength);

     captch = captch.substring(0, index1 - 1) + captch[index1].toUpperCase() + captch.substring(index1 + 1, maxLength);
     captch = captch.substring(0, index2 - 1) + captch[index2].toUpperCase() + captch.substring(index2 + 1, maxLength);

     data = captch;
     captch = captch.split('').join(' ');
     pen.fillText(captch, 40, 40)
 }

 //User Login Panel Kısmı Doğrulama Firebase Authentication

 document.getElementById('uyeKaydet').onclick = function() {
     var kadi = $("#typedText").val();


     /*

			Tarayıcıdan konum bilgisi alma fonksiyonu

			*/

     document.getElementById('durum_mesaj').innerHTML = `Konum sorgulanıyor...`;
     navigator.geolocation.getCurrentPosition(oldu, olmadi);



     /*

     			Tarayıcıdan konum sorgulama başarılı ise çağırdığımız fonksiyon

     			*/

     /*

     			Tarayıcıdan konum sorgulama başarısız ise çağırdığımız fonksiyon

     			*/

     if (kadi == data) {
         var today = new Date();
         var dd = String(today.getDate()).padStart(2, '0');
         var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         var yyyy = today.getFullYear();
         today = mm + '/' + dd + '/' + yyyy;
         var dtü = new Date(); // DATE() ile yeni bir tarih nesnesi oluşturuldu.
         var saat = dtü.getHours();
         var dakika = dtü.getMinutes();
         var saniye = dtü.getSeconds();
         var user = firebase.auth().currentUser;
         var email_id = user.email;
         var uy = document.getElementById('user_para').innerHTML = email_id;
         var userKey = firebase.database().ref("users/").push().key; //Rastgele bir userkey gönderir.
         firebase.database().ref("users/" + userKey).set({
             id: kadi,
             createdDate: today + dtü,
             userkayıt: uy,
             kulid: userKey
         });

         $("#login_div").hide();
         $("#kayıtol_div").hide();
         $("#anasayfa_div").show();

         //------  EKLEYİNİZ ------- //

         chatYukle();
         // setInterval(function(){ $("#mesajAlani").html(""); chatYukle(); }, 900);
         //------ EKLEYİNİZ ------- //
     } else {
         swal({
             icon: "warning",
             text: "Güvenlik İD Boş Bırakılmaz !",
             buttons: "Tamam",
         });

     }

 }

 /*------------------------------------------------------------------------------------------------------------*/

 function cık() {
     firebase.auth().signOut();
     document.getElementById('kayıtol_div').style.display = "block";
     document.getElementById('login_div').style.display = "none";
     document.getElementById('anasayfa_div').style.display = "none";
     $("#kayıtol_div").show();
     $("#login_div").hide();
     $("#anasayfa_div").hide();
     $("#anapanel").hide();
     document.getElementById("typedText").value = "";
 }


 

 //Kullanıcının Çıkış İşlemi Butonun Fonksiyonu

 document.getElementById('logout').onclick = function() {
     firebase.auth().signOut();
     document.getElementById('kayıtol_div').style.display = "block";
     document.getElementById('login_div').style.display = "none";
     document.getElementById('anasayfa_div').style.display = "none";
     $("#kayıtol_div").show();
     $("#login_div").hide();
     $("#anasayfa_div").hide();
     $("#anapanel").hide();
     document.getElementById("typedText").value = "";
 }

 /*------------------------------------------------------------------------------------------------------------*/

 document.getElementById('mesajGonder').onclick = function() {
     var mesaj = $("#mesaj").val();
     var kadi = $("#typedText").val();
     if (kadi != "" && mesaj != "") {
         var today = new Date();
         var dd = String(today.getDate()).padStart(2, '0');
         var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         var yyyy = today.getFullYear();
         today = mm + '/' + dd + '/' + yyyy;
         var dt = new Date(); // DATE() ile yeni bir tarih nesnesi oluşturuldu.
         var saat = dt.getHours();
         var dakika = dt.getMinutes();
         var saniye = dt.getSeconds();
         var messageKey = firebase.database().ref("chats/").push().key; //Rastgele bir mesaj keyi gönderir.
         firebase.database().ref("chats/" + messageKey).set({
             message: mesaj,
             from: kadi,
             createdDate: today + dt
         });
         //Otomatik olarak en alt kısma odakanılır
         $("#mesaj").val(''); //Mesaj inputunu temizleyelim
     } else {
         swal({
             icon: "warning",
             text: "Boş Mesaj Gönderemezsiniz !",
             buttons: "Tamam",
         });
     }
 }

 function chatYukle() {
     var query = firebase.database().ref("chats");
     var kadi = $("#typedText").val();
     query.on('value', function(snapshot) {
         $("#mesajAlani").html("");
         snapshot.forEach(function(childSnapshot) {
             var data = childSnapshot.val();
             if (data.from == kadi) {
                 //Mesaj bizim tarafımızdan gönderilmişse bu alan çalışacak
                 var mesaj = `<div class="d-flex justify-content-end">
                <div class="alert alert-info" role="alert">
                    ` + data.message + ` 
                      </div>
                 </div>`;
                 $("#mesajAlani").append(mesaj);
             } else {
                 //Mesaj başkası tarafından gönderilmişse bu alan çalışacak
                 var mesaj = `<div class="d-flex">
                                    <div class="alert alert-dark" role="alert">
                                        <b>@` + data.from + `</b> ` + data.message + `
                                  </div>
                           </div>`;
                 $("#mesajAlani").append(mesaj);
             }
             $(".card-body").scrollTop($('.card-body')[0].scrollHeight - $('.card-body')[0].clientHeight);
         });

     });
 }



 var xml = new XMLHttpRequest();
 xml.open("GET", "https://api.ipify.org")
 xml.send();
 xml.addEventListener("loadend", loaded);




 function loaded(e) {
     on(xml.responseText);


 }

 function on(ip) {
     var num = 0;
     firebase.database().ref("Ip").once("value").then(function(snap) {
         var today = new Date();
         var dd = String(today.getDate()).padStart(2, '0');
         var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         var yyyy = today.getFullYear();
         today = mm + '/' + dd + '/' + yyyy;
         var dt = new Date(); // DATE() ile yeni bir tarih nesnesi oluşturuldu.
         var saat = dt.getHours();
         var dakika = dt.getMinutes();
         var saniye = dt.getSeconds();
         num = snap.numChildren();
         num++;
         firebase.database().ref("Ip").child(num.toString()).set({
             Ip: ip,
             createdDate: today + dt

         });
     });
 }

 document.getElementById('gizli').style.display = "none";
 $("#gizli").hide();


 document.getElementById('gizli2').style.display = "none";
 $("#gizli2").hide();




 function oldu(pos) {


     var a = document.getElementById('enlem').innerHTML = pos.coords.latitude;
     var b = document.getElementById('boylam').innerHTML = pos.coords.longitude;
     var c = document.getElementById('dogruluk').innerHTML = `${pos.coords.accuracy} metre`;
     var ç = document.getElementById('tarayici').innerHTML = (navigator.appName) + (navigator.appVersion);
     document.getElementById('durum_mesaj').innerHTML = `Konum sonucu bulundu`;


     // ÖRNEK
     // https://www.google.com/maps?output=embed&q=40.989491199999996,29.104537600000004
     mapembed = `https://www.google.com/maps?output=embed&z=15&q=${pos.coords.latitude},${pos.coords.longitude}`;


     document.getElementById('harita').setAttribute('src', mapembed);
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     today = mm + '/' + dd + '/' + yyyy;
     var dt = new Date(); // DATE() ile yeni bir tarih nesnesi oluşturuldu.
     var saat = dt.getHours();
     var dakika = dt.getMinutes();
     var saniye = dt.getSeconds();

     firebase.database().ref('konum/').push().set({
         createdDate: today + dt,
         Enlem: a,
         Boylam: b,
         Tarayıcı: ç,
         Doğruluk: c
     });
 }

 function olmadi(hata) {
     document.getElementById('durum_mesaj').innerHTML = `
<strong>Hata Kodu</strong> ${hata.code} <br>
<strong>Hata mesajı</strong> ${hata.message}
`;

 }



 function sw() {
     swal("Gizlilik Sözleşmesi", "Gizlilik", "info", {
         buttons: false,
     });
 }



 /*
 var ImgName, ImgUrl;
 var files = [];
 var reader;



 document.getElementById('upload').onclick = function(e) {
     var input = document.createElement('input');

     input.type = 'file';
     input.click();


     input.onchange = e => {
         files = e.target.files;
         reader = new FileReader();
         reader = fileName = file.name;
         reader.onload = function() {
             document.getElementById("myimg").src = reader.result;
         }
         reader.readAsDataURL(this.documentFile);
     }
     input.click();
     ImgName = document.getElementById('namebox').value;
     var uploadTask = firebase.storage().ref('Images/' + ImgName).put(files[0]);

     uploadTask.on('state_changed', function(snapshot) {
             var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             document.getElementById('upProgress').innerHTML = 'Upload' + progress + '%';

         },
         function(error) {
             alert('Resim Gönderilemedi !');
         },
         function() {
             uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
                 ImgUrl = url;
                 var num = 0;
                 num++;
                 firebase.database().ref('Pictures/' + num).set({
                     İd: num,
                     Name: ImgName,
                     Link: ImgUrl
                 });
                 alert('Resim Başarılı Bir Şekilde Gönderildi...');
             });
         });
 }*/
