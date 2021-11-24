var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MDk2MzYxNjM1OTgwODY2/what-you-should-know-about-owning-a-golden-retriever.jpg", "https://s36700.pcdn.co/wp-content/uploads/2019/11/2102_happy-Golden_getty189928126-600x414.png"];
var names = ["Family Book","Deben Bora", "Binoyjyoti Das Bora", "Anshul Bora", "Arya Bora", "Cooper Bora"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
