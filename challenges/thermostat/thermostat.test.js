const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('initialises with a temperature of 20 degrees', () => {
    const thermostat = new Thermostat;
    expect(thermostat.temperature).toBe(20);
  })

  it('thermostat power saving mode is initially on', () => {
    const thermostat = new Thermostat;
    expect(thermostat.powerSaving).toBe(true);
  })
  
  it('powersaving can be turned off', () => {
    const thermostat = new Thermostat;
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toBe(false);
  })

  it('powersaving can be turned back on', () => {
    const thermostat = new Thermostat;
    thermostat.togglePowerSaving();
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toBe(true);
  })

  it('temperature can be increased using up method', () => {
    const thermostat = new Thermostat;
    thermostat.up();
    expect(thermostat.temperature).toBe(21);
  })

  it('when powersaving on max temp is 25', () => {
    const thermostat = new Thermostat;
    for (let i = 0; i <= 10; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toBe(25);
  })
  
  it('temperature can be decreased using down method', () => {
    const thermostat = new Thermostat;
    thermostat.down();
    expect(thermostat.temperature).toBe(19);
  })

  it('temperature can not be lowered below 10 degrees', () => {
    const thermostat = new Thermostat;
    for (let i = 0; i <= 20; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toBe(10);
  })
})
