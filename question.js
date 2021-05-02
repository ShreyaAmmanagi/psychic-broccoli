class Question{
    constructor(){
    this.question1 = createElement('h3')
    this.title1 = createElement('h5')
    this.title2 = createElement('h5')
    this.title3 = createElement('h5')
    this.input = createInput()
    this.input2 = createInput()
    this.button = createButton('Submit')
    }
    hide(){
    this.question1.hide()
    this.input.hide()
    this.input2.hide()
    this.button.hide()
    this.title1.hide();
    this.title2.hide();
    this
    }
    display(){
     this.question1.html('Have you ever been treated unequally regarding your gender?')
     this.question1.position(20,20)
     this.question1.style('font-size','45px')
     this.question1.style('font-family','century gothic')
     this.title1.html('If so, please describe your situation here:')
     this.title1.position(50,210)
     this.title1.style('font-size','20px')
     this.title1.style('font-family','century gothic')
     this.input.position(50,300)
     this.title2.html('Your name & your gender: ')
     this.title2.position(50,320)
     this.title2.style('font-family','century gothic')
     this.title2.style('font-size','20px')
     this.title3.html(' Ex:- Shreya ; female')
     this.title3.position(230,380);
     this.input2.position(50,400)
     this.button.position(50,450)
     this.button.mousePressed(
         ()=>{
            this.question1.hide()
            this.input.hide()
            this.input2.hide()
            this.title1.hide()
            this.button.hide()
            this.title2.hide()
            this.title3.hide()
            this.greeting = createElement('h2')
            this.greeting.html('Thank you!')
            this.greeting.position(200,200);
            this.greeting.style('font-size','150px')
            this.greeting.style('font-family','century gothic')
            player.name = this.input.value()
            player.answer = this.input2.value()
            playerCount = playerCount+1
            player.index = playerCount;
            gameState = 1
            player.update()
            player.updateCount(playerCount);
         }
     )
    }
}