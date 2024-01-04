function monthOfYear(month){
    switch (month) {
        case 1:
          console.log(` Month of${month} ==> january`);
          break;
        case 2:
          console.log(` Month of ${month} ==> February`);
          break;
        case 3:
          console.log(` Month of ${month} ==> March`);
          break;
        case 4:
          console.log(` Month of ${month} ==> April`);
          break;
        case 5:
          console.log(` Month of ${month} ==> May`);
          break;
        case 6:
          console.log(` Month of ${month} ==> June`);
          break;
        case 7:
          console.log(` Month of ${month} ==> Jully`);
          break;
          case 8:
          console.log(` Month of ${month} ==> August`);
          break;
          case 9:
          console.log(` Month of ${month} ==> Suptember`);
          break;
          case 10:
          console.log(` Month of  ${month} ==> Octomber`);
          break;
          case 11:
          console.log(`  Month of ${month} ==> November`);
          break;
          case 12:
          console.log(`  Month of ${month} ==> December`);
          break;
        default:
          console.log(`  Month of ${month} --> Invalid Input `);
          break;
      }
}
monthOfYear(0)
monthOfYear(2)
monthOfYear(5)
monthOfYear(12)
monthOfYear(15)
monthOfYear(100)
monthOfYear(null)
monthOfYear(undefined)