<script>    
    export const plate = "";
    export let formerSunday,thisMonday,thisTuesday,thisWednesday,thisThursday,thisFriday, nextSaturday;
    let user =true;
    export let guestInfoStates;
    let infoUser="";
    let infoStartTime="";
    let infoEndTime="";
    function asf(){
        user=!user;
    }
   
    function timeChecked(day,t1,t2){
        for (var i in guestInfoStates)
        {
            if(day !==""&t1<guestInfoStates[i].end_time&t2>guestInfoStates[i].start_time)
            {
                infoUser=guestInfoStates[i].user;
                infoStartTime=guestInfoStates[i].start_time;
                infoEndTime=guestInfoStates[i].end_time;
                // console.log(t1,guestInfoStates[i].start_time);
                break;
            }
        }
        if(day !==""&day!=undefined)
        {
            user=!user;
        }
    }
    let sun1,sun2,sun3,sun4,sun5,sun6,sun7,sun8,sun9;
    let mon1,mon2,mon3,mon4,mon5,mon6,mon7,mon8,mon9;
    let tue1,tue2,tue3,tue4,tue5,tue6,tue7,tue8,tue9;
    let wed1,wed2,wed3,wed4,wed5,wed6,wed7,wed8,wed9;
    let thu1,thu2,thu3,thu4,thu5,thu6,thu7,thu8,thu9;
    let fri1,fri2,fri3,fri4,fri5,fri6,fri7,fri8,fri9;
    let sat1,sat2,sat3,sat4,sat5,sat6,sat7,sat8,sat9;
    import {onMount} from 'svelte';
import { each } from 'svelte/internal';
    onMount(async function(){
        setInterval(async()=>{
            if(guestInfoStates !== undefined)
                {   
                    //sunday
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 09:00:00'<guestInfoStates[i].end_time&formerSunday+' 10:00:00'>guestInfoStates[i].start_time)
                            {
                                sun1="spec";
                                break;
                            }
                            else                    
                            {sun1=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 10:00:00'<guestInfoStates[i].end_time&formerSunday+' 11:00:00'>guestInfoStates[i].start_time)
                            {
                                sun2="spec";
                                break;
                            }
                            else                    
                            {sun2=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 11:00:00'<guestInfoStates[i].end_time&formerSunday+' 12:00:00'>guestInfoStates[i].start_time)
                            {
                                sun3="spec";
                                break;
                            }
                            else                    
                            {sun3=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 12:00:00'<guestInfoStates[i].end_time&formerSunday+' 13:00:00'>guestInfoStates[i].start_time)
                            {
                                sun4="spec";
                                break;
                            }
                            else                    
                            {sun4=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 13:00:00'<guestInfoStates[i].end_time&formerSunday+' 14:00:00'>guestInfoStates[i].start_time)
                            {
                                sun5="spec";
                                break;
                            }
                            else                    
                            {sun5=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 14:00:00'<guestInfoStates[i].end_time&formerSunday+' 15:00:00'>guestInfoStates[i].start_time)
                            {
                                sun6="spec";
                                break;
                            }
                            else                    
                            {sun6=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 15:00:00'<guestInfoStates[i].end_time&formerSunday+' 16:00:00'>guestInfoStates[i].start_time)
                            {
                                sun7="spec";
                                break;
                            }
                            else                    
                            {sun7=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 16:00:00'<guestInfoStates[i].end_time&formerSunday+' 17:00:00'>guestInfoStates[i].start_time)
                            {
                                sun8="spec";
                                break;
                            }
                            else                    
                            {sun8=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&formerSunday+' 17:00:00'<guestInfoStates[i].end_time&formerSunday+' 18:00:00'>guestInfoStates[i].start_time)
                            {
                                sun9="spec";
                                break;
                            }
                            else                    
                            {sun9=""}
                        }
                    //monday
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 09:00:00'<guestInfoStates[i].end_time&thisMonday+' 10:00:00'>guestInfoStates[i].start_time)
                            {
                                mon1="spec";
                                break;
                            }
                            else                    
                            {mon1=""}
                        }                    
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 10:00:00'<guestInfoStates[i].end_time&thisMonday+' 11:00:00'>guestInfoStates[i].start_time)
                            {
                                mon2="spec";
                                break;
                            }
                            else                    
                            {mon2=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 11:00:00'<guestInfoStates[i].end_time&thisMonday+' 12:00:00'>guestInfoStates[i].start_time)
                            {
                                mon3="spec";
                                break;
                            }
                            else                    
                            {mon3=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 12:00:00'<guestInfoStates[i].end_time&thisMonday+' 13:00:00'>guestInfoStates[i].start_time)
                            {
                                mon4="spec";
                                break;
                            }
                            else                    
                            {mon4=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 13:00:00'<guestInfoStates[i].end_time&thisMonday+' 14:00:00'>guestInfoStates[i].start_time)
                            {
                                mon5="spec";
                                break;
                            }
                            else                    
                            {mon5=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 14:00:00'<guestInfoStates[i].end_time&thisMonday+' 15:00:00'>guestInfoStates[i].start_time)
                            {
                                mon6="spec";
                                break;
                            }
                            else                    
                            {mon6=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 15:00:00'<guestInfoStates[i].end_time&thisMonday+' 16:00:00'>guestInfoStates[i].start_time)
                            {
                                mon7="spec";
                                break;
                            }
                            else                    
                            {mon7=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 16:00:00'<guestInfoStates[i].end_time&thisMonday+' 17:00:00'>guestInfoStates[i].start_time)
                            {
                                mon8="spec";
                                break;
                            }
                            else                    
                            {mon8=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisMonday+' 17:00:00'<guestInfoStates[i].end_time&thisMonday+' 18:00:00'>guestInfoStates[i].start_time)
                            {
                                mon9="spec";
                                break;
                            }
                            else                    
                            {mon9=""}
                        }
                    //tuesday                    
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 09:00:00'<guestInfoStates[i].end_time&thisTuesday+' 10:00:00'>guestInfoStates[i].start_time)
                            {
                                tue1="spec";
                                break;
                            }
                            else                    
                            {tue1=""}
                        }                    
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 10:00:00'<guestInfoStates[i].end_time&thisTuesday+' 11:00:00'>guestInfoStates[i].start_time)
                            {
                                tue2="spec";
                                break;
                            }
                            else                    
                            {tue2=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 11:00:00'<guestInfoStates[i].end_time&thisTuesday+' 12:00:00'>guestInfoStates[i].start_time)
                            {
                                tue3="spec";
                                break;
                            }
                            else                    
                            {tue3=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 12:00:00'<guestInfoStates[i].end_time&thisTuesday+' 13:00:00'>guestInfoStates[i].start_time)
                            {
                                tue4="spec";
                                break;
                            }
                            else                    
                            {tue4=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 13:00:00'<guestInfoStates[i].end_time&thisTuesday+' 14:00:00'>guestInfoStates[i].start_time)
                            {
                                tue5="spec";
                                break;
                            }
                            else                    
                            {tue5=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 14:00:00'<guestInfoStates[i].end_time&thisTuesday+' 15:00:00'>guestInfoStates[i].start_time)
                            {
                                tue6="spec";
                                break;
                            }
                            else                    
                            {tue6=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 15:00:00'<guestInfoStates[i].end_time&thisTuesday+' 16:00:00'>guestInfoStates[i].start_time)
                            {
                                tue7="spec";
                                break;
                            }
                            else                    
                            {tue7=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 16:00:00'<guestInfoStates[i].end_time&thisTuesday+' 17:00:00'>guestInfoStates[i].start_time)
                            {
                                tue8="spec";
                                break;
                            }
                            else                    
                            {tue8=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisTuesday+' 17:00:00'<guestInfoStates[i].end_time&thisTuesday+' 18:00:00'>guestInfoStates[i].start_time)
                            {
                                tue9="spec";
                                break;
                            }
                            else                    
                            {tue9=""}
                        }
                    //wednesday
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 09:00:00'<guestInfoStates[i].end_time&thisWednesday+' 10:00:00'>guestInfoStates[i].start_time)
                            {
                                wed1="spec";
                                break;
                            }
                            else                    
                            {wed1=""}
                        }                    
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 10:00:00'<guestInfoStates[i].end_time&thisWednesday+' 11:00:00'>guestInfoStates[i].start_time)
                            {
                                wed2="spec";
                                break;
                            }
                            else                    
                            {wed2=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 11:00:00'<guestInfoStates[i].end_time&thisWednesday+' 12:00:00'>guestInfoStates[i].start_time)
                            {
                                wed3="spec";
                                break;
                            }
                            else                    
                            {wed3=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 12:00:00'<guestInfoStates[i].end_time&thisWednesday+' 13:00:00'>guestInfoStates[i].start_time)
                            {
                                wed4="spec";
                                break;
                            }
                            else                    
                            {wed4=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 13:00:00'<guestInfoStates[i].end_time&thisWednesday+' 14:00:00'>guestInfoStates[i].start_time)
                            {
                                wed5="spec";
                                break;
                            }
                            else                    
                            {wed5=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 14:00:00'<guestInfoStates[i].end_time&thisWednesday+' 15:00:00'>guestInfoStates[i].start_time)
                            {
                                wed6="spec";
                                break;
                            }
                            else                    
                            {wed6=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 15:00:00'<guestInfoStates[i].end_time&thisWednesday+' 16:00:00'>guestInfoStates[i].start_time)
                            {
                                wed7="spec";
                                break;
                            }
                            else                    
                            {wed7=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 16:00:00'<guestInfoStates[i].end_time&thisWednesday+' 17:00:00'>guestInfoStates[i].start_time)
                            {
                                wed8="spec";
                                break;
                            }
                            else                    
                            {wed8=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisWednesday+' 17:00:00'<guestInfoStates[i].end_time&thisWednesday+' 18:00:00'>guestInfoStates[i].start_time)
                            {
                                wed9="spec";
                                break;
                            }
                            else                    
                            {wed9=""}
                        }
                    //thursday
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 09:00:00'<guestInfoStates[i].end_time&thisThursday+' 10:00:00'>guestInfoStates[i].start_time)
                            {
                                thu1="spec";
                                break;
                            }
                            else                    
                            {thu1=""}
                        }                    
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 10:00:00'<guestInfoStates[i].end_time&thisThursday+' 11:00:00'>guestInfoStates[i].start_time)
                            {
                                thu2="spec";
                                break;
                            }
                            else                    
                            {thu2=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 11:00:00'<guestInfoStates[i].end_time&thisThursday+' 12:00:00'>guestInfoStates[i].start_time)
                            {
                                thu3="spec";
                                break;
                            }
                            else                    
                            {thu3=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 12:00:00'<guestInfoStates[i].end_time&thisThursday+' 13:00:00'>guestInfoStates[i].start_time)
                            {
                                thu4="spec";
                                break;
                            }
                            else                    
                            {thu4=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 13:00:00'<guestInfoStates[i].end_time&thisThursday+' 14:00:00'>guestInfoStates[i].start_time)
                            {
                                thu5="spec";
                                break;
                            }
                            else                    
                            {thu5=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 14:00:00'<guestInfoStates[i].end_time&thisThursday+' 15:00:00'>guestInfoStates[i].start_time)
                            {
                                thu6="spec";
                                break;
                            }
                            else                    
                            {thu6=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 15:00:00'<guestInfoStates[i].end_time&thisThursday+' 16:00:00'>guestInfoStates[i].start_time)
                            {
                                thu7="spec";
                                break;
                            }
                            else                    
                            {thu7=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 16:00:00'<guestInfoStates[i].end_time&thisThursday+' 17:00:00'>guestInfoStates[i].start_time)
                            {
                                thu8="spec";
                                break;
                            }
                            else                    
                            {thu8=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisThursday+' 17:00:00'<guestInfoStates[i].end_time&thisThursday+' 18:00:00'>guestInfoStates[i].start_time)
                            {
                                thu9="spec";
                                break;
                            }
                            else                    
                            {thu9=""}
                        }                                            
                    //friday
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 09:00:00'<guestInfoStates[i].end_time&thisFriday+' 10:00:00'>guestInfoStates[i].start_time)
                            {
                                fri1="spec";
                                break;
                            }
                            else                    
                            {fri1=""}
                        }                    
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 10:00:00'<guestInfoStates[i].end_time&thisFriday+' 11:00:00'>guestInfoStates[i].start_time)
                            {
                                fri2="spec";
                                break;
                            }
                            else                    
                            {fri2=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 11:00:00'<guestInfoStates[i].end_time&thisFriday+' 12:00:00'>guestInfoStates[i].start_time)
                            {
                                fri3="spec";
                                break;
                            }
                            else                    
                            {fri3=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 12:00:00'<guestInfoStates[i].end_time&thisFriday+' 13:00:00'>guestInfoStates[i].start_time)
                            {
                                fri4="spec";
                                break;
                            }
                            else                    
                            {fri4=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 13:00:00'<guestInfoStates[i].end_time&thisFriday+' 14:00:00'>guestInfoStates[i].start_time)
                            {
                                fri5="spec";
                                break;
                            }
                            else                    
                            {fri5=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 14:00:00'<guestInfoStates[i].end_time&thisFriday+' 15:00:00'>guestInfoStates[i].start_time)
                            {
                                fri6="spec";
                                break;
                            }
                            else                    
                            {fri6=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 15:00:00'<guestInfoStates[i].end_time&thisFriday+' 16:00:00'>guestInfoStates[i].start_time)
                            {
                                fri7="spec";
                                break;
                            }
                            else                    
                            {fri7=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 16:00:00'<guestInfoStates[i].end_time&thisFriday+' 17:00:00'>guestInfoStates[i].start_time)
                            {
                                fri8="spec";
                                break;
                            }
                            else                    
                            {fri8=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&thisFriday+' 17:00:00'<guestInfoStates[i].end_time&thisFriday+' 18:00:00'>guestInfoStates[i].start_time)
                            {
                                fri9="spec";
                                break;
                            }
                            else                    
                            {fri9=""}
                        }
                    //saturday
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 09:00:00'<guestInfoStates[i].end_time&nextSaturday+' 10:00:00'>guestInfoStates[i].start_time)
                            {
                                sat1="spec";
                                break;
                            }
                            else                    
                            {sat1=""}
                        }                    
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 10:00:00'<guestInfoStates[i].end_time&nextSaturday+' 11:00:00'>guestInfoStates[i].start_time)
                            {
                                sat2="spec";
                                break;
                            }
                            else                    
                            {sat2=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 11:00:00'<guestInfoStates[i].end_time&nextSaturday+' 12:00:00'>guestInfoStates[i].start_time)
                            {
                                sat3="spec";
                                break;
                            }
                            else                    
                            {sat3=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 12:00:00'<guestInfoStates[i].end_time&nextSaturday+' 13:00:00'>guestInfoStates[i].start_time)
                            {
                                sat4="spec";
                                break;
                            }
                            else                    
                            {sat4=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 13:00:00'<guestInfoStates[i].end_time&nextSaturday+' 14:00:00'>guestInfoStates[i].start_time)
                            {
                                sat5="spec";
                                break;
                            }
                            else                    
                            {sat5=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 14:00:00'<guestInfoStates[i].end_time&nextSaturday+' 15:00:00'>guestInfoStates[i].start_time)
                            {
                                sat6="spec";
                                break;
                            }
                            else                    
                            {sat6=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 15:00:00'<guestInfoStates[i].end_time&nextSaturday+' 16:00:00'>guestInfoStates[i].start_time)
                            {
                                sat7="spec";
                                break;
                            }
                            else                    
                            {sat7=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 16:00:00'<guestInfoStates[i].end_time&nextSaturday+' 17:00:00'>guestInfoStates[i].start_time)
                            {
                                sat8="spec";
                                break;
                            }
                            else                    
                            {sat8=""}
                        }
                    for (var i in guestInfoStates)
                        {
                            if(guestInfoStates[i].plate !== undefined&nextSaturday+' 17:00:00'<guestInfoStates[i].end_time&nextSaturday+' 18:00:00'>guestInfoStates[i].start_time)
                            {
                                sat9="spec";
                                break;
                            }
                            else                    
                            {sat9=""}
                        } 
                }
            else
            {
                //sun1=""
            }
            
        },1000)
    });
</script>

<style>
    table{
        width: 100%;
        text-align: center;
    }
    .section{
        padding: 0.5rem 1.5rem;
    }
    .spec{
        background:gold;
        opacity:0.35;
    }
    
    .spec:hover{
        opacity:0.6;
    }

</style>




<div class="section" hidden={!user}>
    <div class="container">
        <table class="table is-bordered is-striped">
            <thead>
                <tr>
                    <th width=90px></th>
                    <th width=90px word-wrap=break-all>
                        <div>{formerSunday}</div> Sunday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisMonday}</div> Monday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisTuesday}</div> Tuesday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisWednesday}</div> Wednesday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisThursday}</div> Thursday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisFriday}</div> Friday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{nextSaturday}</div> Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>9:00-10:00</th>
                    <th class={sun1} on:click={timeChecked(sun1,formerSunday+' 09:00:00',formerSunday+' 10:00:00')}></th>
                    <th class={mon1} on:click={timeChecked(mon1,thisMonday+' 09:00:00',thisMonday+' 10:00:00')}></th>
                    <th class={tue1} on:click={timeChecked(tue1,thisTuesday+' 09:00:00',thisTuesday+' 10:00:00')}></th>
                    <th class={wed1} on:click={timeChecked(wed1,thisWednesday+' 09:00:00',thisWednesday+' 10:00:00')}></th>
                    <th class={thu1} on:click={timeChecked(thu1,thisThursday+' 09:00:00',thisThursday+' 10:00:00')}></th>
                    <th class={fri1} on:click={timeChecked(fri1,thisFriday+' 09:00:00',thisFriday+' 10:00:00')}></th>
                    <th class={sat1} on:click={timeChecked(sat1,nextSaturday+' 09:00:00',nextSaturday+' 10:00:00')}></th>
                </tr>
                <tr>
                    <th>10:00-11:00</th>
                    <th class={sun2} on:click={timeChecked(sun2,formerSunday+' 10:00:00',formerSunday+' 11:00:00')}></th>
                    <th class={mon2} on:click={timeChecked(mon2,thisMonday+' 10:00:00',thisMonday+' 11:00:00')}></th>
                    <th class={tue2} on:click={timeChecked(tue2,thisTuesday+' 10:00:00',thisTuesday+' 11:00:00')}></th>
                    <th class={wed2} on:click={timeChecked(wed2,thisWednesday+' 10:00:00',thisWednesday+' 11:00:00')}></th>
                    <th class={thu2} on:click={timeChecked(thu2,thisThursday+' 10:00:00',thisThursday+' 11:00:00')}></th>
                    <th class={fri2} on:click={timeChecked(fri2,thisFriday+' 10:00:00',thisFriday+' 11:00:00')}></th>
                    <th class={sat2} on:click={timeChecked(sat2,nextSaturday+' 10:00:00',nextSaturday+' 11:00:00')}></th>
                </tr>
                <tr>
                    <th>11:00-12:00</th>
                    <th class={sun3} on:click={timeChecked(sun3,formerSunday+' 11:00:00',formerSunday+' 12:00:00')}></th>
                    <th class={mon3} on:click={timeChecked(mon3,thisMonday+' 11:00:00',thisMonday+' 12:00:00')}></th>
                    <th class={tue3} on:click={timeChecked(tue3,thisTuesday+' 11:00:00',thisTuesday+' 12:00:00')}></th>
                    <th class={wed3} on:click={timeChecked(wed3,thisWednesday+' 11:00:00',thisWednesday+' 12:00:00')}></th>
                    <th class={thu3} on:click={timeChecked(thu3,thisThursday+' 11:00:00',thisThursday+' 12:00:00')}></th>
                    <th class={fri3} on:click={timeChecked(fri3,thisFriday+' 11:00:00',thisFriday+' 12:00:00')}></th>
                    <th class={sat3} on:click={timeChecked(sat3,nextSaturday+' 11:00:00',nextSaturday+' 12:00:00')}></th>
                </tr>
                <tr>
                    <th>12:00-13:00</th>
                    <th class={sun4} on:click={timeChecked(sun4,formerSunday+' 12:00:00',formerSunday+' 13:00:00')}></th>
                    <th class={mon4} on:click={timeChecked(mon4,thisMonday+' 12:00:00',thisMonday+' 13:00:00')}></th>
                    <th class={tue4} on:click={timeChecked(tue4,thisTuesday+' 12:00:00',thisTuesday+' 13:00:00')}></th>
                    <th class={wed4} on:click={timeChecked(wed4,thisWednesday+' 12:00:00',thisWednesday+' 13:00:00')}></th>
                    <th class={thu4} on:click={timeChecked(thu4,thisThursday+' 12:00:00',thisThursday+' 13:00:00')}></th>
                    <th class={fri4} on:click={timeChecked(fri4,thisFriday+' 12:00:00',thisFriday+' 13:00:00')}></th>
                    <th class={sat4} on:click={timeChecked(sat4,nextSaturday+' 12:00:00',nextSaturday+' 13:00:00')}></th>
                </tr>
                <tr>
                    <th>13:00-14:00</th>
                    <th class={sun5} on:click={timeChecked(sun5,formerSunday+' 13:00:00',formerSunday+' 14:00:00')}></th>
                    <th class={mon5} on:click={timeChecked(mon5,thisMonday+' 13:00:00',thisMonday+' 14:00:00')}></th>
                    <th class={tue5} on:click={timeChecked(tue5,thisTuesday+' 13:00:00',thisTuesday+' 14:00:00')}></th>
                    <th class={wed5} on:click={timeChecked(wed5,thisWednesday+' 13:00:00',thisWednesday+' 14:00:00')}></th>
                    <th class={thu5} on:click={timeChecked(thu5,thisThursday+' 13:00:00',thisThursday+' 14:00:00')}></th>
                    <th class={fri5} on:click={timeChecked(fri5,thisFriday+' 13:00:00',thisFriday+' 14:00:00')}></th>
                    <th class={sat5} on:click={timeChecked(sat5,nextSaturday+' 13:00:00',nextSaturday+' 14:00:00')}></th>
                </tr>
                <tr>
                    <th>14:00-15:00</th>
                    <th class={sun6} on:click={timeChecked(sun6,formerSunday+' 14:00:00',formerSunday+' 15:00:00')}></th>
                    <th class={mon6} on:click={timeChecked(mon6,thisMonday+' 14:00:00',thisMonday+' 15:00:00')}></th>
                    <th class={tue6} on:click={timeChecked(tue6,thisTuesday+' 14:00:00',thisTuesday+' 15:00:00')}></th>
                    <th class={wed6} on:click={timeChecked(wed6,thisWednesday+' 14:00:00',thisWednesday+' 15:00:00')}></th>
                    <th class={thu6} on:click={timeChecked(thu6,thisThursday+' 14:00:00',thisThursday+' 15:00:00')}></th>
                    <th class={fri6} on:click={timeChecked(fri6,thisFriday+' 14:00:00',thisFriday+' 15:00:00')}></th>
                    <th class={sat6} on:click={timeChecked(sat6,nextSaturday+' 14:00:00',nextSaturday+' 15:00:00')}></th>
                </tr>
                <tr>
                    <th>15:00-16:00</th>
                    <th class={sun7} on:click={timeChecked(sun7,formerSunday+' 15:00:00',formerSunday+' 16:00:00')}></th>
                    <th class={mon7} on:click={timeChecked(mon7,thisMonday+' 15:00:00',thisMonday+' 16:00:00')}></th>
                    <th class={tue7} on:click={timeChecked(tue7,thisTuesday+' 15:00:00',thisTuesday+' 16:00:00')}></th>
                    <th class={wed7} on:click={timeChecked(wed7,thisWednesday+' 15:00:00',thisWednesday+' 16:00:00')}></th>
                    <th class={thu7} on:click={timeChecked(thu7,thisThursday+' 15:00:00',thisThursday+' 16:00:00')}></th>
                    <th class={fri7} on:click={timeChecked(fri7,thisFriday+' 15:00:00',thisFriday+' 16:00:00')}></th>
                    <th class={sat7} on:click={timeChecked(sat8,nextSaturday+' 15:00:00',nextSaturday+' 16:00:00')}></th>
                </tr>
                <tr>
                    <th>16:00-17:00</th>
                    <th class={sun8} on:click={timeChecked(sun8,formerSunday+' 16:00:00',formerSunday+' 17:00:00')}></th>
                    <th class={mon8} on:click={timeChecked(mon8,thisMonday+' 16:00:00',thisMonday+' 17:00:00')}></th>
                    <th class={tue8} on:click={timeChecked(tue8,thisTuesday+' 16:00:00',thisTuesday+' 17:00:00')}></th>
                    <th class={wed8} on:click={timeChecked(wed8,thisWednesday+' 16:00:00',thisWednesday+' 17:00:00')}></th>
                    <th class={thu8} on:click={timeChecked(thu8,thisThursday+' 16:00:00',thisThursday+' 17:00:00')}></th>
                    <th class={fri8} on:click={timeChecked(fri8,thisFriday+' 16:00:00',thisFriday+' 17:00:00')}></th>
                    <th class={sat8} on:click={timeChecked(sat8,nextSaturday+' 16:00:00',nextSaturday+' 17:00:00')}></th>
                </tr>
                <tr>
                    <th>17:00-18:00</th>
                    <th class={sun9} on:click={timeChecked(sun9,formerSunday+' 17:00:00',formerSunday+' 18:00:00')}></th>
                    <th class={mon9} on:click={timeChecked(mon9,thisMonday+' 17:00:00',thisMonday+' 18:00:00')}></th>
                    <th class={tue9} on:click={timeChecked(tue9,thisTuesday+' 17:00:00',thisTuesday+' 18:00:00')}></th>
                    <th class={wed9} on:click={timeChecked(wed9,thisWednesday+' 17:00:00',thisWednesday+' 18:00:00')}></th>
                    <th class={thu9} on:click={timeChecked(thu9,thisThursday+' 17:00:00',thisThursday+' 18:00:00')}></th>
                    <th class={fri9} on:click={timeChecked(fri9,thisFriday+' 17:00:00',thisFriday+' 18:00:00')}></th>
                    <th class={sat9} on:click={timeChecked(sat9,nextSaturday+' 17:00:00',nextSaturday+' 18:00:00')}></th>
                </tr>
            </tbody>
        </table>
    </div>    
</div>

<button class="button" on:click={asf} >showModal</button>

<div hidden={!user}>
    {#if guestInfoStates !== undefined }
        {#if guestInfoStates[0].plate !== undefined}
            <h1>{#each guestInfoStates as guestinfo (guestinfo.id_carusage)}
            <tr>{guestinfo.plate} {guestinfo.start_time}</tr>
            {/each}
            </h1>
        {/if}
    {/if}
</div>

<div class="modal-car" hidden={user}>
    <div class="modal-background" on:click={asf}></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Car Booking Info</p>
        <button class="delete" aria-label="close" on:click={asf}></button>
      </header>
      <section class="modal-card-body">
        <div class="column is-6 is-offset-3">username  :{infoUser}</div>
        <div class="column is-6 is-offset-3">start_time:{infoStartTime}</div>
        <div class="column is-6 is-offset-3">end_time  :{infoEndTime}</div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" on:click={asf}>Confirmed</button>
        <!-- <button class="button" on:click={asf} >Cancel</button> -->
      </footer>
    </div>
</div>