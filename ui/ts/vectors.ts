

class vec3 {
    x: number = 0;
    y: number = 0;
    z: number = 0;


    constructor(x?: number, y?: number, z?: number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
    }
}

class vec2 {
    x: number = 0;
    y: number = 0;


    constructor(x?: number, y?: number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
}

