function caesarCipher(string, key) {
    key = scaleKey(key)
    let encrypted = "";
    
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    for(let ele of string) {
        let indexEle = alphabets.indexOf(ele.toLowerCase());

        if (indexEle < 0 ){
            encrypted += ele
            continue
        }

        let eleCase = getCase(ele);

        let pointer = indexEle;
        let keyCopy = key;
        
        while (keyCopy!= 0) {
            if (pointer == alphabets.length - 1) {
                pointer = 0
                keyCopy -= 1
                continue
            }
            pointer += 1
            keyCopy -= 1
        }
        
        encrypted += eleCase == "UpperCase" ? (alphabets[pointer]).toUpperCase(): (alphabets[pointer]).toLowerCase();
    }

    return encrypted;
}

function getCase(ele) {
    if (ele == ele.toLowerCase()) {
        return "LowerCase";
    } 
    return "UpperCase"
}

function scaleKey(key) {
    return key % 26
}

export {caesarCipher}