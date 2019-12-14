function speak(string) {
    if (string === string.toLowerCase()) {
        return 'I love you a lot';
    }
    else if (string === string.toUpperCase()) {
        return 'I think I love you';
    }
    else if (string == 'Hello Grandma') {
        return 'I love you grandma';
    }
    else {
        return 'Invalid sting'
    }
}

console.log(speak('hello'))
