class VigenereCipheringMachine {
        isBackward = null;
        
        constructor (direction){
                this.isBackward = direction === false ? true : false;
        }

        encrypt(string, key) {
                let theString = string.toLowerCase();
                let theKey = key.toLowerCase();
                let arrEn = [];
                let indexString = 0;
                let indexKey = 0;
                
                while (indexString < theString.length){
                        let theStringCharCode = theString.charCodeAt(indexString),
                                theKeyCharCode = theKey.charCodeAt(indexKey % theKey.length);
                        
                        if (theStringCharCode >= 97 && theStringCharCode <= 122) {
                                arrEn.push(String.fromCharCode(65 + ((theStringCharCode + theKeyCharCode - 97 * 2) % 26)));
                                indexKey ++;
                        } else {
                                arrEn.push(theString.charAt(indexString));  
                        }
                        indexString ++;
                }
                return isBackward ? arrEn.reverse().join('') : arrEn.join(''); 

        }    
        decrypt(string, key) {
                let theString = string.toUpperCase();
                let theKey = key.toUpperCase();
                let arrEn = [];
                let indexString = 0;
                let indexKey = 0;

                while (indexString < theString.length){
                        let theStringCharCode = theString.charCodeAt(indexString),
                                theKeyCharCode = theKey.charCodeAt(indexKey % theKey.length);
                        
                        if (theStringCharCode >= 65 && theStringCharCode <= 90) {
                                arrEn.push(String.fromCharCode(65 + (theStringCharCode - theKeyCharCode >= 0 ? 
                                                                        theStringCharCode - theKeyCharCode : 
                                                                        26 + theStringCharCode - theKeyCharCode)));
                                indexKey ++;
                        } else {
                                arrEn.push(theString.charAt(indexString));  
                        }
                        indexString ++;
                }
                return isBackward ? arrEn.reverse().join('') : arrEn.join('');  
        }
      };

      const aaa = new VigenereCipheringMachine;

      console.log (aaa.encrypt('attack at dawn!', 'alphonse'));
      console.log (aaa.decrypt('AEIHQX SX DLLU!', 'alphonse'));

      //65|90|97|122