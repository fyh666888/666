function createXHR(){//兼容性写法
			if(typeof XMLHttpRequest !='undefined'){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject !='undefined'){
			if(typeof arguments.callee.activeXString !='string'){
				var versions =['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];//IE浏览器中字符串
			for(var i=0;i<versions.length;i++){
				
			try{
				new ActiveXObject((versions[i]));
				arguments.callee.activeXString = versions[i];
			}
			catch(e){
				
			}
			
		}
			
	}
			return new ActiveXObject(arguments.callee.activeXString);
			 
		}else{
			throw new Error('无法创建ajax对象');
		}
	 }