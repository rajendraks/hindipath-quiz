posts_no_thumb_sum = 390;
posts_thumb_sum = 280;
img_thumb_height = 160;
img_thumb_width = 180;
    if ($(window).width() &lt;= 728){
posts_no_thumb_sum = 290;
posts_thumb_sum = 150;
img_thumb_height = 120;
img_thumb_width = 140;
    }
    if ($(window).width() &lt;= 490){
posts_no_thumb_sum = 190;
posts_thumb_sum = 90;
img_thumb_height = 80;
img_thumb_width = 100;
    }
    if ($(window).width() &lt;= 300){
posts_no_thumb_sum = 150;
posts_thumb_sum = 50;
img_thumb_height = 40;
img_thumb_width = 60;
    }
</script>
<script type='text/javascript'>
//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID, pURL, pTITLE){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = posts_no_thumb_sum;
if(img.length>=1) {
imgtag = '<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="'+ pURL +'" title="'+ pTITLE+'"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px" /></a></span>';
summ = posts_thumb_sum;
}

var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}
