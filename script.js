function createSquare(size, color = 'hotpink'){

    const square = document.createElement('div');

    square.style.width = size + 'px';
    square.style.height = size;

    square.style.backgroundColor = color;

    document.body.append(square);

    console.log(size, color);
}

createSquare(20, 'limegreen');