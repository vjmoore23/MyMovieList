var item = new Array();


c=0; item[c]=new Array("index.html","","My Movie List- Homepage","index,homepage,home,movie,list","My Movie List is a web application for users to keep track of currently watched movies providing a rating/review system.");
c++; item[c]=new Array("signIn.html","","My Movie List- Account Sign In","account,user,sign,signin,log,login","My Movie List user account log in page.");
c++; item[c]=new Array("createAccount.html","","My Movie List- Create Account","create,account,signup,up,sign,user","My Movie List create user account page.");
c++; item[c]=new Array("movieList_Year.html","","My Movie List- Movie Year","movie,year,list","My Movie List users movie list sorted by movie year page.");
c++; item[c]=new Array("movieList_Genre.html","","My Movie List- Movie Genre","movie,genre,list","My Movie List users movie list sorted by movie genre page.");
c++; item[c]=new Array("movieList_Rate.html","","My Movie List- Movie Reviews","movie,review,rate,rating,list","My Movie List users movie reviews and ratings page.");
c++; item[c]=new Array("accountInformation.html","","My Movie List- Account Information","account,user,info,information","My Movie List user account information page.");
c++; item[c]=new Array("contact.html","","My Movie List- Contact Us","contact,owner,dev,help,movie,list","My Movie List contact the development team page.");

page="<html><head><title>Search Results</title></head><body bgcolor='#000000' link='#88eee2' vlink='#88eee2' alink='#88eee2' text='#ff9900'><center><table border=0 cellspacing=10 width=80%>";


function search(frm) {
win = window.open("","","scrollbars");
win.document.write(page);
txt = frm.srchval.value.split(" ");
fnd = new Array(); total=0;
for (i = 0; i < item.length; i++) {
fnd[i] = 0; order = new Array(0, 4, 2, 3);
for (j = 0; j < order.length; j++)
for (k = 0; k < txt.length; k++)
if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
fnd[i] += (j+1);
}
for (i = 0; i < fnd.length; i++) {
n = 0; w = -1;
for (j = 0;j < fnd.length; j++)
if (fnd[j] > n) { n = fnd[j]; w = j; };
if (w > -1) total += show(w, win, n);
fnd[w] = 0;
}
win.document.write("</table><br>Total results found: "+total+"<br></body></html>");
win.document.close();
}
function show(which,wind,num) {
link = item[which][1] + item[which][0]; 
line = "<tr><td><a href='"+link+"'>"+item[which][2]+"</a> Results: "+num+"<br>";
line += item[which][4] + "<br>"+link+"</td></tr>";
wind.document.write(line);
return 1;
}
