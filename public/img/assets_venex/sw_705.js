!function(oWindow,widgetSettings){var oDocument=oWindow.document,sWidgets=widgetSettings.widgets;if(sWidgets[0]){oWindow.emblueOnSiteApp?oWindow.emblueOnSiteApp.start(widgetSettings):!function(){var status,oScript,firstScript;oScript=oDocument.createElement('script'),status=!1,firstScript=oDocument.getElementsByTagName('script')[0],oScript.type='text/javascript',oScript.async=!0,oScript.src=widgetSettings.settings.library,oScript.onload=oScript.onreadystatechange=function(){var state=this.readyState;status||state&&state!=='complete'&&state!=='loaded'||(status=!0,oWindow.emblueOnSiteApp.start(widgetSettings))},firstScript.parentNode.insertBefore(oScript,firstScript)}()}}(window,{widgets:[],runtime:{trackUrl:"https://widgets-api.embluemail.com/api/v1/impression",submitUrl:"https://widgets-api.embluemail.com/api/v1/submit",apiUrl:"https://widgets-api.embluemail.com/api/v1/api",whatsappBulletImage:"",doTrack:!0,responsive:{enabled:!0,breakpoint:640},logoUrl:"",removeLogo:!0,sessionLength:20,enableGoogleAnalytics:!1},settings:{library:"https://widgets-api.embluemail.com/library/2.11.1"}})