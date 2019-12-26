// Lexical This

function test(){
    console.log(this);
}
test();

var employee = {
    id: 1,
    greet: function(){
        console.log(this.id);
        setTimeout(() => {
            console.log('Value refers the parent object '+this.id);
        },2000);
    },
};
employee.greet();

const video = {
    title: 'a',
    play(){
        console.log(this);
    },
};
video.play();