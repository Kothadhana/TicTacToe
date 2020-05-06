
function reset()
{
   a=[1,2,3,4,5,6,7,8,9];
   rowwise=[[a[0],a[1],a[2]] , [a[3],a[4],a[5]] , [a[6],a[7],a[8]] ];
   colwise=[[a[0],a[3],a[6]], [a[1],a[4],a[7]], [a[2],a[5],a[8]] ];
   cross=[[a[0],a[4],a[8]] , [a[2],a[4],a[6]]];
}
var a=[1,2,3,4,5,6,7,8,9];
var rowwise=[[a[0],a[1],a[2]] , [a[3],a[4],a[5]] , [a[6],a[7],a[8]] ];
var colwise=[[a[0],a[3],a[6]], [a[1],a[4],a[7]], [a[2],a[5],a[8]] ];
var cross=[[a[0],a[4],a[8]] , [a[2],a[4],a[6]]];
var turn=false;
ready();
function ready()
{
  $(".start").click(function(){
  reset();
  $("#result").text("");
  for(var i=1;i<=9;i++)
  {
    $("#"+i).text("");
  }
  $("#action").text("PLAYING......  ")
  startGame();
});
}
function startGame()
{
    if(checkIfOver()==false)
    {
    //console.log(a);
        checkTurn();
        console.log(a);
    }
    else
    {
        $("#action").text("Click START button to play again");
        ready();
    }
}
function checkTurn()
{
       if(turn==false)
       {
             computerPlay();
       }
       else
       {
            userPlay();
       }
}
function checkIfOver()
{      var f2=0,num=0;
       for(var i=0;i<7;i+=3)
       {
          if(a[i]==a[i+1] && a[i+1]==a[i+2])
          {
               num=a[i][0];
         //flag=1;
               break;
         }
      }
      if(num==0)
      {
           for(var i=0;i<3;i++)
           {
                if(a[i]==a[i+3] && a[i+3]==a[i+6])
                {
                    num=a[i];
      //  flag=1;
                    break;
               }
           }
      }
      if(num==0)
      {
           if(a[0]==a[4] && a[4]==a[8])
           {
                num=a[0];
          //   break;
            }
      }
      if(num==0)
       {
               if(a[2]==a[4] && a[4]==a[6])
               {
                     num=a[2];
            //  break;
                }
       }
      if(num==0)
       {
              for(var i=0;i<a.length;i++)
             {
                if(a[i]!=-1 && a[i]!=-2)
                {
                      f2=1;
                      break;
                }
            }
       }
       if(num<0)
       {
              if(num==-1)
                 $("#result").text("Congratulations! You Won this game");
              else if(num==-2)
                   $("#result").text("Oops!You lost this game. Better luck next time..");
              ready();
              return true;
       }
       if(f2==0 && num>=0)
       {
             $("#result").text("DRAW!");
             ready();
              return true;
       }
       return false;
}
function computerPlay()
{
     var j=-3;
     //for rowwise
     for(var i=0;i<7;i+=3)
    {
         if((a[i]==a[i+2] && a[i]==-2) || (a[i+1]==a[i] && a[i]==-2) || (a[i+1]==a[i+2] && a[i+1]==-2))
         {
            if(a[i+1]>0)
            { //  a[i+1]=-2;
               j=i+1;
          //     flag=1;
               break;
            }
            else if(a[i]>0)
           {
            //   a[i]=-2;
               j=i;
              // flag=1;
               break;
           }
           else if(a[i+2]>0)
           {
            //  a[i+2]=-2;
              j=i+2;
            //  flag=1;
              break;
           }

         }
    }
    //checking columnwise
     if(j==-3)
     {
         for(var i=0;i<3;i++)
         {
               if((a[i+3]==a[i] && a[i]==-2) || (a[i]==a[i+6] && a[i]==-2 ) || (a[i+3]==a[i+6] && a[i+3]==-2))
               {
                       if(a[i]>0)
                       {
                   //a[i]=-2;
                            j=i;
                          //  flag=2;
                            break;
                      }
                      else if(a[i+3]>0)
                      {
                //   a[i+3]=-2;
                            j=i+3;
                            //flag=2;
                            break;
                      }
                      else if(a[i+6]!=-2 && a[i+6]>0)
                     {
                //   a[i+6]=-2;
                           j=i+6;
                        //   flag=2;
                         break;
                      }
               }
         }
     }
     //checking one diagnol
     if(j==-3)
     {
          if((a[0]==a[4] && a[0]==-2) || (a[4]==a[8] && a[4]==-2) || (a[0]==a[8] && a[0]==-2))
          {
              if(a[0]>0)
                //   a[0]=-2;
                   j=0;
                //   flag=3;

              else if(a[4]>0)
             {
                 //a[4]=-2;
                 j=4;
                 //flag=3;
             }
             else if(a[8]>0)
             {
                // a[8]=-2;
                 j=8;
              //  flag=3;
             }

          }
      }
      //checking other diagnol
      if(j==-3)
      {
         if((a[2]==a[4] && a[2]==-2) || (a[4]==a[6]  && a[4]==-2 ) || ( a[2]==a[6] && a[2]==-2))
         {
                if(a[2]>0)
                {
                  // a[2]=-2;
                    j=2;
                   //flag=3;
                 }
                else if(a[4]>0)
                 {
                    // a[4]=-2;
                     j=4;
                  //  flag=3;
                  }
                 else if(a[6]>0)
                 {
                     j=6;
                  //  flag=3;
                 }
          }
      }
          //checking opponets
          if(j==-3)
          for(var i=0;i<7;i+=3)
         {
              if((a[i]==a[i+2] && a[i]==-1) || (a[i+1]==a[i] && a[i]==-1) || (a[i+1]==a[i+2] && a[i+1]==-1))
              {
                 if(a[i+1]>0)
                 { //  a[i+1]=-2;
                    j=i+1;
                    //flag=1;
                    break;
                 }
                 else if(a[i]>0)
                {
                 //   a[i]=-2;
                    j=i;
                  //  flag=1;
                    break;
                }
                else if(a[i+2]!=-2 && a[i+2]>0)
                {
                 //  a[i+2]=-2;
                   j=i+2;
                   //flag=1;
                   break;
                }

              }
         }
         //checking columnwise
          if(j==-3)
          {
              for(var i=0;i<3;i++)
              {
                    if((a[i+3]==a[i] && a[i]==-1) || (a[i]==a[i+6] && a[i]==-1 ) || (a[i+3]==a[i+6] && a[i+3]==-1))
                    {
                            if(a[i]>0)
                            {
                        //a[i]=-2;
                                 j=i;
                                 //flag=2;
                                 break;
                           }
                           else if(a[i+3]>0)
                           {
                     //   a[i+3]=-2;
                                 j=i+3;
                              //   flag=2;
                                 break;
                           }
                           else if(a[i+6]>0)
                          {
                     //   a[i+6]=-2;
                                j=i+6;
                              //  flag=2;
                              break;
                           }
                    }
              }
          }
          //checking one diagnol
          if(j==-3)
          {
               if((a[0]==a[4] && a[0]==-1) || (a[4]==a[8] && a[4]==-1) || (a[0]==a[8] && a[0]==-1))
               {
                   if( a[0]>0)
                   {
                     //   a[0]=-2;
                        j=0;
                    //    flag=3;
                  }
                   else if(a[4]>0)
                  {
                      //a[4]=-2;
                      j=4;
                    //  flag=3;
                  }
                  else if(a[8]>0)
                  {
                     // a[8]=-2;
                      j=8;
                    // flag=3;
                  }

               }
           }
           //checking other diagnol
           if(j==-3)
           {
              if((a[2]==a[4] && a[2]==-1) || (a[4]==a[6]  && a[4]==-1 ) || ( a[2]==a[6] && a[2]==-1))
              {
                     if(a[2]>0)
                     {
                       // a[2]=-2;
                         j=2;
                      //  flag=3;
                      }
                     else if(a[4]>0)
                      {
                         // a[4]=-2;
                          j=4;
                      //   flag=3;
                       }
                      else if( a[6]>0)
                      {
                          j=6;
                         //flag=3;
                      }
               }
            }

         if(j==-3)
         {
                j=Math.floor(Math.random()*8)+1;
                while(a[j]==-1 || a[j]==-2)
                {
                    j=Math.floor(Math.random()*8)+1;
                }
        }
        a[j]=-2;
        var k=j+1;
        console.log("#"+k);
        $("#"+k).text("X");
        turn=true;
        console.log("user"+turn);
        startGame();
}
function userPlay()
{
    $(".col button").click(function(){
      console.log(this);
      if(a[this.id-1]>0)
      {
        $(this).text("#");
        a[this.id-1]=-1;
        //console.log(this.id-1);
      //  console.log(f);
        turn=false;
        console.log("user"+turn);
        startGame();
      }

    });
}
