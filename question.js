class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("QUIZOO GAME");
      title.position(130, 0);
  
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this. question.html("Question :- What starts and end with the letter 'E' but has only one letter ")
        this. question.position(150,80);
        this.option1.html("1, EVERYONE")
        this.option1.position(150,100)
        this.option2.html("2,Envelope")
        this.option2.position(150,120)
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(130, 100);
      });
  
    }
  }
  