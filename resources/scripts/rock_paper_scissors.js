class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu: 0,
      tie: 0
    },
    this.matchNumber = 0;
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    return acceptedValues[Math.floor(Math.random() * 3)];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection === cpuSelection)
      return 'tie';

    if (userSelection === 'rock' && cpuSelection === 'scissors' ||
        userSelection === 'paper' && cpuSelection === 'rock' ||
        userSelection === 'scissors' && cpuSelection == 'paper')
        return 'win';

    return 'lose';
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    this.matchNumber++;
    let cpuSelection = this.generateCPUResponse();
    let log = 'Match ' + this.matchNumber + ': ' + this.username + ' selected ' + userSelection + ', CPU selected ' + cpuSelection + ': ';
    let outcome = this.determineWinner(userSelection, cpuSelection);
    switch (outcome) {
      case 'win':
        this.score.user++;
        this.gameHistoryLog.push(log + this.username + ' wins!');
        break;

      case 'lose':
        this.score.cpu++;
        this.gameHistoryLog.push(log + this.username + ' loses!');
        break;

      default:
        this.score.tie++;
        this.gameHistoryLog.push(log + 'Tie!');
    }
  }

}