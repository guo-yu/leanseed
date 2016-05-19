'use strict';

import { Cloud } from 'leanengine'

Cloud.define('hello', function(request, response){
  response.success('Hello world')
})

export default Cloud
