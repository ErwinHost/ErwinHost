function announceTime(clock) {
    clock = clock || Date
    return 'It is now ' + clock.now()
  }
   
  console.log(announceTime())
