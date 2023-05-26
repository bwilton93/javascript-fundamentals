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

  it('when powersaving is not on, max temp is 32', () => {
    const thermostat = new Thermostat;
    thermostat.togglePowerSaving();
    for (let i = 0; i <= 15; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toBe(32);
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

  it('temperature can be rest to 20 using a reset method', () => {
    const thermostat = new Thermostat;
    for (let i = 0; i <= 5; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.temperature).toBe(20);
  })

  it('returns low-usage when checking energy usage for < 18 degrees', () => {
    const thermostat = new Thermostat;
    for (let i = 0; i < 2; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toBe('low-usage');
  })
})
