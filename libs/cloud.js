'use strict';

import Lean from 'leanengine'

Lean.Cloud.define('hello', function(request, response){
  response.success('Hello world')
})

export default Lean.Cloud
