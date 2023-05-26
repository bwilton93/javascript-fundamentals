class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  togglePowerSaving() {
    this.powerSaving = !this.powerSaving;
  }

  up() {
    this.temperature += 1;
    if (this.powerSaving && this.temperature > 25) {
      this.temperature = 25;
    } else if (this.temperature > 32) {
      this.temperature = 32;
    }
  }

  down() {
    this.temperature -= 1;
    if (this.temperature < 10) {
      this.temperature = 10;
    }
  }

  reset() {
    this.temperature = 20;
  }
}

module.exports = Thermostat;
