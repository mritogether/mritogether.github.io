
tz_offset = {"tz": -100};
var url      = window.location.href;
var arr = url.split('?');
if (arr.length > 1 && arr[1] !== '') {
  location.search.slice(1).split("&").forEach(function(pair) {
	   pair = pair.split("=");
	   tz_offset[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	});
}
days = [];	
els = [];
date = new Date();
zone = date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
zone_name = Intl.DateTimeFormat('en-us',{timeZoneName:'short'}).resolvedOptions().timeZone;
if(tz_offset['tz'] == -100)
{
	timeZone = -(date.getTimezoneOffset())/60;
} else{
	timeZone = (tz_offset['tz']);
}



function populateTimeZones()
{
    var min = -12, 
    max = +12,
    select = document.getElementById("timezone_select");
    
    for (var i = min; i<=max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = "UTC" + (i<0?"":"+") + i;
        select.appendChild(opt);
    }
}

function setTimeZone()
{
    var optionBox = document.getElementById("timezone_select");
    // var date = new Date();
    var offset = date.getTimezoneOffset();
    console.log(offset);
    optionBox.value = Math.round(-offset/60);
}

function adaptData(data)
{	
	var date = new Date();

    data = data.replace(/ /g,'');
	var timeArray = data.split(':');
	var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);

    var new_data = timeStamp + timeZone*60;
    hr = Math.floor(new_data/60);
    if(hr<10){
		hr = String(hr).padStart(2, '0')
	}

	day = hr/24;
	if(!Number.isInteger(day)){
		day += 1;
	}
	if (hr % 24 == 0){
		day += 1;
	}
	day = Math.floor(day);

    mn = new_data%60;
    if(mn<10)
    {
    	mn = String(mn).padStart(2, '0')
    }
    new_time = hr + ':' + mn
    
    return [new_time, day]

}

function deadaptData(data)
{	
	var date = new Date();
	// var optionBox = document.getElementById("timezone_select");
 //    var timeZone = parseInt(optionBox.value);
 	// var timeZone = date.getTimezoneOffset()/60;

    data = data.replace(/ /g,'');
	var timeArray = data.split(':');
	var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);

    var new_data = timeStamp + timeZone*60;
    hr = Math.floor(new_data/60);
    if(hr<10){
		hr = String(hr).padStart(2, '0')
	}
    mn = new_data%60;
    if(mn<10)
    {
    	mn = String(mn).padStart(2, '0')
    }
    new_time = hr + ':' + mn
    
    return new_time

}

function dataToTime(data, isnegative)
{
	hr = data/60;
	if(isnegative && !Number.isInteger(hr)){
		hr += 1;
	}
	hr = Math.floor(hr);
	day = hr/24;
	if(isnegative && !Number.isInteger(day)){
		day += 1;
	}
	day = Math.floor(day);

	if(hr<10){
		hr = String(hr).padStart(2, '0')
	}

    mn = data%60;
    if(mn<10)
    {
    	mn = String(mn).padStart(2, '0')
    }
    new_time = hr + ':' + mn;
    return new_time
}

(function() {
	// Schedule Template - by CodyHouse.co
	function ScheduleTemplate( element ) {
		this.element = element;
		this.timelineItems = this.element.getElementsByClassName('cd-schedule__timeline')[0].getElementsByTagName('li');
		this.timelineStart = getScheduleTimestamp(this.timelineItems[0].textContent);
		this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems[1].textContent) - getScheduleTimestamp(this.timelineItems[0].textContent);
		
		this.topInfoElement = this.element.getElementsByClassName('cd-schedule__top-info')[0];
		this.singleEvents = this.element.getElementsByClassName('cd-schedule__event');
		
		this.modal = this.element.getElementsByClassName('cd-schedule-modal')[0];
		this.modalHeader = this.element.getElementsByClassName('cd-schedule-modal__header')[0];
		this.modalHeaderBg = this.element.getElementsByClassName('cd-schedule-modal__header-bg')[0];
		this.modalBody = this.element.getElementsByClassName('cd-schedule-modal__body')[0];
		this.modalBodyBg = this.element.getElementsByClassName('cd-schedule-modal__body-bg')[0];
		this.modalClose = this.modal.getElementsByClassName('cd-schedule-modal__close')[0];
		this.modalDate = this.modal.getElementsByClassName('cd-schedule-modal__date')[0];
		this.modalEventName = this.modal.getElementsByClassName('cd-schedule-modal__name')[0];
		this.modalModeratorInfo = this.modal.getElementsByClassName('cd-schedule-modal__speaker_info')[0];
		this.modalSpeakerInfo = this.modal.getElementsByClassName('cd-schedule-modal__speaker_info')[1];
		this.modalSpeakerInfoTitle = this.modal.getElementsByClassName('cd-schedule-modal__info')[0];
		this.modalModeratorInfoTitle = this.modal.getElementsByClassName('cd-schedule-modal__info')[1];

		this.coverLayer = this.element.getElementsByClassName('cd-schedule__cover-layer')[0];

		this.modalMaxWidth = 1000;
		this.modalMaxHeight = 510;

		this.animating = false;
		this.supportAnimation = Util.cssSupports('transition');

		this.initSchedule();
	};

	ScheduleTemplate.prototype.initSchedule = function(onresize=false) {
		this.scheduleReset(onresize=onresize);
		this.initEvents(onresize=onresize);


	    tz_text = document.getElementById("timezone_text");
	    if(tz_offset['tz']!=-100){
	    	tz_text.innerHTML = '<a style="color: #858a8c; font-size: 15px; line-height: 22px; font-family: Asap">* All times are based on </a><a style="text-decoration: line-through; color: #858a8c; font-size: 15px; line-height: 22px; font-family: Asap">' + zone_name.replaceAll('_', ' ') + '<a style="color: #858a8c; font-size: 15px; line-height: 22px; font-family: Asap"> (' + "GMT" + tz_offset['tz'] + ')</a>'

	    } else {
	    	tz_text.innerHTML = '<a style="color: #858a8c; font-size: 15px; line-height: 22px; font-family: Asap">* All times are based on ' + zone_name.replaceAll('_', ' ') + ' (' + zone + ')</a>'
	    }
	    if (timeZone > -2.1) {
	       document.getElementById("Day0_all").style.display = "none"; 
	       document.getElementById("Day0_all").innerHTML = "";
	   } 
	   if (timeZone < 6.1) {
	       document.getElementById("Day5_all").style.display = "none"; 
	       document.getElementById("Day5_all").innerHTML = "";
	   } 
	};

	ScheduleTemplate.prototype.scheduleReset = function(onresize=false) {
		// according to the mq value, init the style of the template
		var mq = this.mq(),
			loaded = Util.hasClass(this.element, 'js-schedule-loaded'),
			modalOpen = Util.hasClass(this.modal, 'cd-schedule-modal--open');
		if( mq == 'desktop' && !loaded ) {
			Util.addClass(this.element, 'js-schedule-loaded');
			this.placeEvents(onresize=onresize);
			modalOpen && this.checkEventModal(modalOpen);
		} else if( mq == 'mobile' && loaded) {
			//in this case you are on a mobile version (first load or resize from desktop)
			Util.removeClass(this.element, 'cd-schedule--loading js-schedule-loaded');
			this.resetEventsStyle();
			this.placeEvents(onresize=onresize);
			modalOpen && this.checkEventModal();
		} else if( mq == 'desktop' && modalOpen ) {
			//on a mobile version with modal open - need to resize/move modal window
			this.checkEventModal(modalOpen);
			Util.removeClass(this.element, 'cd-schedule--loading');
		} else {
			this.placeEvents(onresize=onresize);
			Util.removeClass(this.element, 'cd-schedule--loading');
		}
	};

	ScheduleTemplate.prototype.resetEventsStyle = function() {
		// remove js style applied to the single events
		for(var i = 0; i < this.singleEvents.length; i++) {
			this.singleEvents[i].removeAttribute('style');
		}
	};
	var added = 0;

	ScheduleTemplate.prototype.placeEvents = function(onresize=false) {
		// on big devices - place events in the template according to their time/day
		var self = this,
			slotHeight = 50;//this.topInfoElement.offsetHeight;

		
		for(var i = 0; i < this.singleEvents.length; i++){
			els[i] = this.singleEvents[i];
			var anchor = this.singleEvents[i].getElementsByTagName('a')[0];
			if (!onresize){
				start = adaptData(anchor.getAttribute('data-start'));
				end = adaptData(anchor.getAttribute('data-end'));

				anchor.setAttribute('data-start', start[0]);
				anchor.setAttribute('data-end', end[0]);
			} 
			
			if (!onresize){
				start_day = start[1];
				end_day = end[1];
			} else {
				start_day = anchor.getAttribute('start_day');
				end_day=start_day;
			}
			anchor.setAttribute('start_day', start_day);

			if (!onresize){
				var day = "#Day" + start_day;
				days[i] = day;
			}
			
			}
		if (!onresize){
			for(var i = 0; i < this.singleEvents.length; i++) {
				$(els[i]).appendTo(days[i]);
			}
		}

		for(var i = 0; i < els.length; i++) {
			var anchor = els[i].getElementsByTagName('a')[0];
			var data_start = getScheduleTimestamp(anchor.getAttribute('data-start'));
			var data_end = getScheduleTimestamp(anchor.getAttribute('data-end'));
			var duration = (data_end - data_start)/60;

			var day = days[i];
			prev_day = '#Day' + (parseInt(day[4])-1);
			next_day = '#Day' + (parseInt(day[4])+1);

			anchor.setAttribute('data-day', days[i])
			if(days[i] == "#Day0" & !onresize){
				data_start = dataToTime(data_start + 24*60, false);
				data_end = dataToTime(data_end + 24*60, false);
				anchor.setAttribute('data-start', data_start);
				anchor.setAttribute('data-end', data_end);

			} else if(days[i] == "#Day1" & !onresize){
				data_start = dataToTime(data_start - 24*60*0, false);
				data_end = dataToTime(data_end - 24*60*0, false);
				anchor.setAttribute('data-start', data_start);
				anchor.setAttribute('data-end', data_end);

			} else if(days[i] == "#Day2" & !onresize){
				data_start = dataToTime(data_start - 24*60*1, false);
				data_end = dataToTime(data_end - 24*60*1, false);
				anchor.setAttribute('data-start', data_start);
				anchor.setAttribute('data-end', data_end);

			} else if(days[i] == "#Day3" & !onresize){
				data_start = dataToTime(data_start - 24*60*2, false);
				data_end = dataToTime(data_end - 24*60*2, false);
				anchor.setAttribute('data-start', data_start);
				anchor.setAttribute('data-end', data_end);

			} else if(days[i] == "#Day4" & !onresize){
				data_start = dataToTime(data_start - 24*60*3, false);
				data_end = dataToTime(data_end - 24*60*3, false);
				anchor.setAttribute('data-start', data_start);
				anchor.setAttribute('data-end', data_end);
			}

			else if(days[i] == "#Day5" & !onresize){
				data_start = dataToTime(data_start - 24*60*4, false);
				data_end = dataToTime(data_end - 24*60*4, false);
				anchor.setAttribute('data-start', data_start);
				anchor.setAttribute('data-end', data_end);
			}

			if (data_end > "24:00" & !onresize){
				data_start = dataToTime(getScheduleTimestamp(data_start), false);
				data_end = dataToTime(getScheduleTimestamp(data_end), false);
				anchor.setAttribute('data-start', data_start);
				anchor.setAttribute('data-end', "24:00" + ' (contd.)');
				const cloned_event = els[i].cloneNode(true);
				cloned_anchor = cloned_event.getElementsByTagName('a')[0];
				cloned_anchor.setAttribute('data-start', dataToTime(getScheduleTimestamp("00:00")));
				cloned_anchor.setAttribute('data-end', data_end);
				cloned_anchor.setAttribute('data-end', dataToTime(getScheduleTimestamp(cloned_anchor.getAttribute('data-end'))-24*60));
				// if (cloned_anchor.getAttribute('data-start') == "24:00" + ' (contd.)'){
				// 	cloned_anchor.setAttribute('data-start', "00:00");
				// 	cloned_anchor.setAttribute('data-end', dataToTime(getScheduleTimestamp(cloned_anchor.getAttribute('data-end'))-24*60));
				// }
				cloned_anchor.setAttribute('data-start', dataToTime(getScheduleTimestamp(cloned_anchor.getAttribute('data-start'))+24*60*parseInt(day[4])));
				cloned_anchor.setAttribute('data-end', dataToTime(getScheduleTimestamp(cloned_anchor.getAttribute('data-end'))+24*60*parseInt(day[4])));
				cloned_anchor.setAttribute('data-day', next_day)
				days.push(next_day)
				els.push(cloned_event)
				$(next_day).prepend(cloned_event);
			} 
		}
		for(var i = 0; i < els.length; i++){

			var anchor = els[i].getElementsByTagName('a')[0];
			
			var start = getScheduleTimestamp(anchor.getAttribute('data-start')),
				duration = getScheduleTimestamp(anchor.getAttribute('data-end')) - start;

			var eventTop = slotHeight*(start - self.timelineStart)/self.timelineUnitDuration,
				eventHeight = slotHeight*duration/self.timelineUnitDuration;

			els[i].setAttribute('style', 'top: '+(eventTop-1)+'px; height: '+(eventHeight +1)+'px');
			}

		Util.removeClass(this.element, 'cd-schedule--loading');
	};

	ScheduleTemplate.prototype.initEvents = function(onresize=false) {
		var self = this;
		for(var i = 0; i < this.singleEvents.length; i++) {
			//// open modal when user selects an event
			this.singleEvents[i].addEventListener('click', function(event){
				event.preventDefault();
				if(!self.animating) self.openModal(this.getElementsByTagName('a')[0]);
			});
		}
		//close modal window
		this.modalClose.addEventListener('click', function(event){
			event.preventDefault();
			if( !self.animating ) self.closeModal();
		});
		this.coverLayer.addEventListener('click', function(event){
			event.preventDefault();
			if( !self.animating ) self.closeModal();
		});
	};

	ScheduleTemplate.prototype.openModal = function(target) {
		var self = this;
		var mq = self.mq();
		this.animating = true;

		//update event name and time
		this.modalEventName.textContent = target.getElementsByTagName('em')[0].textContent;
		// this.modalEventInfo.textContent = target.getAttribute('data-speaker');
		self.modalDate.style.transform = 'scaleX(1) scaleY(1)';
		self.modalEventName.style.transform = 'scaleX(1) scaleY(1)';
		self.modalModeratorInfo.style.transform = 'scaleX(1) scaleY(1)';
		self.modalModeratorInfoTitle.style.transform = 'scaleX(1) scaleY(1)';
		self.modalSpeakerInfo.style.transform = 'scaleX(1) scaleY(1)';
		self.modalSpeakerInfoTitle.style.transform = 'scaleX(1) scaleY(1)';


		if (this.modalEventName.textContent.includes("Matching")) {
			self.modalModeratorInfoTitle.style.transform = 'scaleX(0) scaleY(0)';
		}

		var speakers = target.getAttribute('data-speakers')
		if (typeof speakers == "string" && speakers.length) {
			speakers = speakers.split(" ");
			} else {
				speakers = [];
			}
		var moderators = target.getAttribute('data-moderators')
		if (typeof moderators == "string" && moderators.length) {
			moderators = moderators.split(" ");
			} else {
				moderators = [];
			}
		modalModeratorInfo = this.modalModeratorInfo;
		modalModeratorInfo.innerHTML = "";
		modalSpeakerInfo = this.modalSpeakerInfo;
		modalSpeakerInfo.innerHTML = "";
		// db.ref('users').once("value").then(function(snapshot) {
  //     var a = snapshot.exists();  // true
  //     var b = snapshot.child("name").exists(); // true
  //     var c = snapshot.child("name/first").exists(); // true
  //     var d = snapshot.child("name/middle").exists(); // false
  //   }); 
  		for (const moderator of moderators) {
  			user = usersInfo[moderator];
  			url = user.url;
  			name = user.name;
  			affiliation = user.aff;
  			twitter = user.twt;
  			mast = user.mast;
  			inner = "";

  			inner += "<div class='item'> <img class='cd-schedule-modal__img' src=" + url + "> <span class='caption'>" + name;
  			if (twitter != null){
				    inner += " <a style='color: white;' href='https://twitter.com/" + twitter + "' target='_blank'><i class='fab fa-twitter'></i></a>";
				}
			if (mast != null){
			    inner += " <a style='color: white;' href='https://" + mast + "' target='_blank'><i class='fab fa-mastodon'></i></a>";
			}

			inner += "<br><a style='text-decoration: none; font-size: calc(var(--text-sm)*0.75); line-height:9px;'>" + affiliation + "</a></span>";
			inner += "</div>";


			modalModeratorInfo.innerHTML += inner;
		}
		// modalEventInfo.innerHTML += "<br><span class='cd-schedule-modal__info'>Speakers</span>";
		for (const speaker of speakers) {
			user = usersInfo[speaker];
			url = user.url;
  			name = user.name;
  			affiliation = user.aff;
  			twitter = user.twt;
  			mast = user.mast;
  			inner = "";

  			inner += "<div class='item'> <img class='cd-schedule-modal__img' src=" + url + "> <span class='caption'>" + name;
  			if (twitter != null){
				    inner += " <a style='color: white;' href='https://twitter.com/" + twitter + "' target='_blank'><i class='fab fa-twitter'></i></a>";
				}
			if (mast != null){
			    inner += " <a style='color: white;' href='https://" + mast + "' target='_blank'><i class='fab fa-mastodon'></i></a>";
			}
			inner += "<br><a style='text-decoration: none; font-size: calc(var(--text-sm)*0.75); line-height:9px;'>" + affiliation + "</a></span>";
			inner += "</div>";

			
			modalSpeakerInfo.innerHTML += inner;
			}

		this.modalDate.textContent = target.getAttribute('data-start')+' - '+target.getAttribute('data-end');


		day = parseInt(target.getAttribute('data-day').replace('#Day', '')) + 2;
		day = "0" + day.toString();
		start = target.getAttribute('data-start').replace(':', '');
		end = target.getAttribute('data-end').replace(':', '');
		cal_url = "https://www.google.com/calendar/render?action=TEMPLATE&text=MRI+Together:+" + this.modalEventName.textContent.replace('\'', '') + "&ctz=" + zone_name + "&details=https://app.gather.town/app/xbgBZ1HCwy9iqGq4/mritogether24&location=https://app.gather.town/app/xbgBZ1HCwy9iqGq4/mritogether24&dates=202412" + day + "T" + start + "00/202412" + day + "T" + end + "00";
		cal_html = "  <a style='color: white;' href='" + cal_url + "' target='_blank' alt='add to calendar' target='_blank'>  <i class='far fa-calendar-plus fa-lg'></i><a href='" + cal_url + "' style='font-size: 8pt; color: white;'  target='_blank'> add to calendar</a></a>";
		this.modalDate.innerHTML += cal_html;

		this.modal.setAttribute('data-event', target.getAttribute('data-event'));

		//update event content
		this.loadEventContent(target.getAttribute('data-content'));

		Util.addClass(this.modal, 'cd-schedule-modal--open');
		
		setTimeout(function(){
			//fixes a flash when an event is selected - desktop version only
			Util.addClass(target.closest('li'), 'cd-schedule__event--selected');
		}, 10);

		if( mq == 'mobile' ) {
			self.modalModeratorInfo.style.transform = 'scaleX(0) scaleY(0)';
			self.modalSpeakerInfo.style.transform = 'scaleX(0) scaleY(0)';
			self.modal.addEventListener('transitionend', function cb(){
				self.animating = false;
				self.modal.removeEventListener('transitionend', cb);
			});
		} else {
			var eventPosition = target.getBoundingClientRect(),
				eventTop = eventPosition.top,
				eventLeft = eventPosition.left,
				eventHeight = target.offsetHeight,
				eventWidth = target.offsetWidth*1;

			var windowWidth = window.innerWidth,
				windowHeight = window.innerHeight;

			var modalWidth = ( windowWidth*.7 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.7,
				modalHeight = ( windowHeight*.7 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.7;

			var modalTranslateX = parseInt((windowWidth - modalWidth)/2 - eventLeft),
				modalTranslateY = parseInt((windowHeight - modalHeight)/2 - eventTop);
			
			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);

			//change modal height/width and translate it
			self.modal.setAttribute('style', 'top:'+eventTop+'px;left:'+eventLeft+'px;height:'+modalHeight+'px;width:'+modalWidth+'px;transform: translateY('+modalTranslateY+'px) translateX('+modalTranslateX+'px)');
			//set modalHeader width
			self.modalHeader.setAttribute('style', 'width:'+eventWidth+'px');
			//set modalBody left margin
			self.modalBody.setAttribute('style', 'margin-left:'+eventWidth+'px');
			//change modalBodyBg height/width ans scale it
			self.modalBodyBg.setAttribute('style', 'height:'+eventHeight+'px; width: 1px; transform: scaleY('+HeaderBgScaleY+') scaleX('+BodyBgScaleX+')');
			//change modal modalHeaderBg height/width and scale it
			self.modalHeaderBg.setAttribute('style', 'height: '+eventHeight+'px; width: '+eventWidth+'px; transform: scaleY('+HeaderBgScaleY+')');
			
			self.modalHeaderBg.addEventListener('transitionend', function cb(){
				//wait for the  end of the modalHeaderBg transformation and show the modal content
				self.animating = false;
				Util.addClass(self.modal, 'cd-schedule-modal--animation-completed');
				self.modalHeaderBg.removeEventListener('transitionend', cb);
			});
		}

		//if browser do not support transitions -> no need to wait for the end of it
		this.animationFallback();
	};

	ScheduleTemplate.prototype.closeModal = function() {
		var self = this;
		var mq = self.mq();

		var item = self.element.getElementsByClassName('cd-schedule__event--selected')[0],
			target = item.getElementsByTagName('a')[0];

		this.animating = true;

		if( mq == 'mobile' ) {
			Util.removeClass(this.modal, 'cd-schedule-modal--open');
			self.modal.addEventListener('transitionend', function cb(){
				Util.removeClass(self.modal, 'cd-schedule-modal--content-loaded');
				Util.removeClass(item, 'cd-schedule__event--selected');
				self.animating = false;
				self.modal.removeEventListener('transitionend', cb);
			});
		} else {
			var eventPosition = target.getBoundingClientRect(),
				eventTop = eventPosition.top,
				eventLeft = eventPosition.left,
				eventHeight = target.offsetHeight,
				eventWidth = target.offsetWidth*1;

			var modalStyle = window.getComputedStyle(self.modal),
				modalTop = Number(modalStyle.getPropertyValue('top').replace('px', '')),
				modalLeft = Number(modalStyle.getPropertyValue('left').replace('px', ''));

			var modalTranslateX = eventLeft - modalLeft,
				modalTranslateY = eventTop - modalTop;

			Util.removeClass(this.modal, 'cd-schedule-modal--open cd-schedule-modal--animation-completed');

			//change modal width/height and translate it
			self.modal.style.width = eventWidth+'px';self.modal.style.height = eventHeight+'px';self.modal.style.transform = 'translateX('+modalTranslateX+'px) translateY('+modalTranslateY+'px)';
			//scale down modalBodyBg element
			self.modalBodyBg.style.transform = 'scaleX(0) scaleY(1)';
			//scale down modalHeaderBg element
			// self.modalHeaderBg.setAttribute('style', 'transform: scaleY(1)');
			self.modalHeaderBg.style.transform = 'scaleX(0) scaleY(1)';
			self.modalDate.style.transform = 'scaleX(0) scaleY(0)';
			self.modalEventName.style.transform = 'scaleX(0) scaleY(0)';
			self.modalModeratorInfo.style.transform = 'scaleX(0) scaleY(0)';
			self.modalModeratorInfoTitle.style.transform = 'scaleX(0) scaleY(0)';
			self.modalSpeakerInfo.style.transform = 'scaleX(0) scaleY(0)';
			self.modalSpeakerInfoTitle.style.transform = 'scaleX(0) scaleY(0)';


			self.modalHeaderBg.addEventListener('transitionend', function cb(){
				//wait for the  end of the modalHeaderBg transformation and reset modal style
				Util.addClass(self.modal, 'cd-schedule-modal--no-transition');
				setTimeout(function(){
					self.modal.removeAttribute('style');
					self.modalBody.removeAttribute('style');
					self.modalHeader.removeAttribute('style');
					self.modalHeaderBg.removeAttribute('style');
					self.modalBodyBg.removeAttribute('style');
					// self.modalSpeakerInfo.removeAttribute('style');
					// self.modalModeratorInfo.removeAttribute('style');
				}, 10);
				setTimeout(function(){
					Util.removeClass(self.modal, 'cd-schedule-modal--no-transition');
				}, 20);
				self.animating = false;
				Util.removeClass(self.modal, 'cd-schedule-modal--content-loaded');
				Util.removeClass(item, 'cd-schedule__event--selected');
				self.modalHeaderBg.removeEventListener('transitionend', cb);
			});
		}

		//if browser do not support transitions -> no need to wait for the end of it
		this.animationFallback();
	};

	ScheduleTemplate.prototype.checkEventModal = function(modalOpen) {
		// this function is used on resize to reset events/modal style
		this.animating = true;
		var self = this;
		var mq = this.mq();
		if( mq == 'mobile' ) {
			//reset modal style on mobile
			self.modal.removeAttribute('style');
			self.modalBody.removeAttribute('style');
			self.modalHeader.removeAttribute('style');
			self.modalHeaderBg.removeAttribute('style');
			self.modalBodyBg.removeAttribute('style');
			Util.removeClass(self.modal, 'cd-schedule-modal--no-transition');
			self.animating = false;	
		} else if( mq == 'desktop' && modalOpen) {
			Util.addClass(self.modal, 'cd-schedule-modal--no-transition cd-schedule-modal--animation-completed');
			var item = self.element.getElementsByClassName('cd-schedule__event--selected')[0],
				target = item.getElementsByTagName('a')[0];

			var eventPosition = target.getBoundingClientRect(),
				eventTop = eventPosition.top,
				eventLeft = eventPosition.left,
				eventHeight = target.offsetHeight,
				eventWidth = target.offsetWidth*1;

			var windowWidth = window.innerWidth,
				windowHeight = window.innerHeight;

			var modalWidth = ( windowWidth*.8 > self.modalMaxWidth ) ? self.modalMaxWidth : windowWidth*.8,
				modalHeight = ( windowHeight*.8 > self.modalMaxHeight ) ? self.modalMaxHeight : windowHeight*.8;

			var HeaderBgScaleY = modalHeight/eventHeight,
				BodyBgScaleX = (modalWidth - eventWidth);


			setTimeout(function(){
				self.modal.setAttribute('style', 'top:'+(windowHeight/2 - modalHeight/2)+'px;left:'+(windowWidth/2 - modalWidth/2)+'px;height:'+modalHeight+'px;width:'+modalWidth+'px;transform: translateY(0) translateX(0)');
				//change modal modalBodyBg height/width
				self.modalBodyBg.style.height = modalHeight+'px';self.modalBodyBg.style.transform = 'scaleY(1) scaleX('+BodyBgScaleX+')';self.modalBodyBg.style.width = '1px';
				//set modalHeader width
				self.modalHeader.setAttribute('style', 'width:'+eventWidth+'px');
				//set modalBody left margin
				self.modalBody.setAttribute('style', 'margin-left:'+eventWidth+'px');
				//change modal modalHeaderBg height/width and scale it
				self.modalHeaderBg.setAttribute('style', 'height: '+eventHeight+'px;width:'+eventWidth+'px; transform:scaleY('+HeaderBgScaleY+');');
			}, 10);

			setTimeout(function(){
				Util.removeClass(self.modal, 'cd-schedule-modal--no-transition');
				self.animating = false;	
			}, 20);

		}
	};

	ScheduleTemplate.prototype.loadEventContent = function(content) {
		// load the content of an event when user selects it
		var self = this;

		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
	      if (httpRequest.status === 200) {
	      	self.modal.getElementsByClassName('cd-schedule-modal__event-info')[0].innerHTML = self.getEventContent(httpRequest.responseText); 
	      	Util.addClass(self.modal, 'cd-schedule-modal--content-loaded');
	      }
	    }
		};
		httpRequest.open('GET', content+'.html');
    httpRequest.send();
	};

	ScheduleTemplate.prototype.getEventContent = function(string) {
		// reset the loaded event content so that it can be inserted in the modal
		var div = document.createElement('div');
		div.innerHTML = string.trim();
		return div.getElementsByClassName('cd-schedule-modal__event-info')[0].innerHTML;
	};

	ScheduleTemplate.prototype.animationFallback = function() {
		if( !this.supportAnimation ) { // fallback for browsers not supporting transitions
			var event = new CustomEvent('transitionend');
			self.modal.dispatchEvent(event);
			self.modalHeaderBg.dispatchEvent(event);
		}
	};

	ScheduleTemplate.prototype.mq = function(){
		//get MQ value ('desktop' or 'mobile') 
		var self = this;
		return window.getComputedStyle(this.element, '::before').getPropertyValue('content').replace(/'|"/g, "");
	};

	function getScheduleTimestamp(time) {
		//accepts hh:mm format - convert hh:mm to timestamp
		time = time.replace(/ /g,'');
		var timeArray = time.split(':');
		// if(timeArray[0]>=24){
		// 	timeArray[0] -= 24;
		// }
		var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
		return timeStamp;
		// return timeStamp;
	};

	var scheduleTemplate = document.getElementsByClassName('js-cd-schedule'),	
		scheduleTemplateArray = [],
		resizing = false;
	if( scheduleTemplate.length > 0 ) { // init ScheduleTemplate objects
		for( var i = 0; i < scheduleTemplate.length; i++) {
			(function(i){
				scheduleTemplateArray.push(new ScheduleTemplate(scheduleTemplate[i]));
			})(i);
		}

		window.addEventListener('resize', function(event) { 
			// on resize - update events position and modal position (if open)
			if( !resizing ) {
				resizing = true;
				(!window.requestAnimationFrame) ? setTimeout(checkResize, 250) : window.requestAnimationFrame(checkResize);
			}
		});

		window.addEventListener('keyup', function(event){
			// close event modal when pressing escape key
			if( event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {
				for(var i = 0; i < scheduleTemplateArray.length; i++) {
					scheduleTemplateArray[i].closeModal();
				}
			}
		});

		function checkResize(){
			
			resizing = false;
			for(var i = 0; i < scheduleTemplateArray.length; i++) {
				// scheduleTemplateArray[i].scheduleReset(onresize=true);
				scheduleTemplateArray[i].initSchedule(onresize=true);
				scheduleTemplateArray[i].placeEvents(onresize=true);
			}
		};
	}
}(
	)
	);
