function checkvowel(char){
    char=char.toLowerCase()
    switch(char){
        case 'a':
            case 'e':
                case 'i':
                    case 'o':
                        case 'u':
                            console.log("vowel")
                            break;
                            default:
                                console.log("its is constant")
                                break;
    }
}
let char = 'A';
checkvowel(char)