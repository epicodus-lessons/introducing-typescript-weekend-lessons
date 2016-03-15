class Task {
  done: boolean;
  constructor(public description: string, public priority: string){
    this.done = false;
  }
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {}

var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();
console.log(tasks);
