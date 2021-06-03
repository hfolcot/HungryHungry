function detectCollision(object1, object2) {
    if (object1.x + object1.size > object2.x &&
        object1.x < object2.x + object2.size &&
        object1.y + object1.size > object2.y &&
        object1.y < object2.y + object2.size) {
        return true;
    }
    if (object2.x + object2.size > object1.x &&
        object2.x < object1.x + object1.size &&
        object2.y > object1.y &&
        object2.y + object2.size < object1.y + object1.size) {
        return true;
    }
}