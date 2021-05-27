function detectCollision(object1, object2) {
    if (object1.x + object1.width > object2.x &&
        object1.x < object2.x + object2.width &&
        object1.y + object1.height > object2.y &&
        object1.y < object2.y + object2.height) {
        return true;
    }
    if (object2.x + object2.widt > object1.x &&
        object2.x < object1.x + object1.width &&
        object2.y > object1.y &&
        object2.y + object2.height < object1.y + object1.height) {
        return true;
    }
}