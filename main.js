var images = [,"DSC01922.jpg","foto akhi.jpg","400523.jpg","IMG_20191212_174007.jpg","IMG_20191018_171344.jpg"];
var names = [,"SUKESH .A.M.", "AKHILA .K.V.", "AADINAHT .S.", "AVNI .S.","FAMILY"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
