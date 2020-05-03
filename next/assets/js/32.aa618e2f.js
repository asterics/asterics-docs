(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{2152:function(e,t,o){e.exports=o.p+"assets/img/Pong.d947bb75.jpg"},2153:function(e,t,o){e.exports=o.p+"assets/img/PongScreen.e515f649.jpg"},2154:function(e,t,o){e.exports=o.p+"assets/img/PongApplication.a6b7aa94.jpg"},508:function(e,t,o){"use strict";o.r(t);var n=o(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"pong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pong"}},[e._v("#")]),e._v(" Pong")]),e._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-others"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-others"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Others)")]),e._v(" "),n("p",[e._v("The Pong component is an implementation of the classic “pong”-game, where two players control their paddles and try to hit a moving ball.\nThe Pong component offers different input modalities (speed or event-based) so that the game can be played via a wide range (and combination of) sensors.\nTwo users can play the game using different sensors.\nSeveral game options can be controlled by the plugin properties.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(2152),alt:"Screenshot: Pong plugin",title:"Screenshot: Pong plugin"}}),n("br"),e._v("\nPong plugin")]),e._v(" "),n("p",[n("img",{attrs:{src:o(2153),alt:"Screenshot: Pong game screen",title:"Pong game screen"}}),n("br"),e._v("\nPong game screen")]),e._v(" "),n("h2",{attrs:{id:"application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[e._v("#")]),e._v(" Application")]),e._v(" "),n("p",[e._v("A special “bike-Pong” interface has been developed at UAS Technikum Wien, which allows playing the game via bicycle ergometers.\nFor this purpose, the Arduino microcontroller (and corresponding plugin) are utilized to measure the user interactions and deliver the data to the Pong plugin.\nThe energy created by the pong-players can be calculated in calories (this mode makes only sense when the bike-ergonometers are connected, see properties) Please note that the bike mode only works well with a screen resolution of 1920x1090 because of the utilized background graphics.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(2154),alt:"bike pong gaming",title:"bike pong gaming"}}),n("br"),e._v("\nbike-ergomenter controlled pong game")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("playerOnePos [integer]:")]),e._v(" This input port defines the position of player one’s paddle (0 to 300)")]),e._v(" "),n("li",[n("strong",[e._v("playerTwoPos [integer]:")]),e._v(" This input port defines the position of player two’s paddle (0 to 300)")]),e._v(" "),n("li",[n("strong",[e._v("playerOneSpeed [integer]:")]),e._v(" This input port defines the speed of player one’s paddle (-10 to 10)")]),e._v(" "),n("li",[n("strong",[e._v("playerTwoSpeed [integer]:")]),e._v(" This input port defines the speed of player two’s paddle (-10 to 10)")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("startGame:")]),e._v(" An incoming event starts/restarts the game")]),e._v(" "),n("li",[n("strong",[e._v("playerOneToggleDirection:")]),e._v(" An incoming event changes the direction of player one’s paddle (only relevant for event-based paddle control mode).")]),e._v(" "),n("li",[n("strong",[e._v("playerTwoToggleDirection:")]),e._v(" An incoming event changes the direction of player two’s paddle (only relevant for event-based paddle control mode).")]),e._v(" "),n("li",[n("strong",[e._v("playerOneMovement:")]),e._v(" An incoming event moves player one’s paddle one step (only relevant for event-based paddle control mode).\nThis input is also used for the calculation of the total amount of engery.")]),e._v(" "),n("li",[n("strong",[e._v("playerTwoMovement:")]),e._v(" An incoming event moves player two’s paddle one step (only relevant for event-based paddle control mode).\nThis input is also used for the calculation of the total amount of engery.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("controlMode [combobox selection]:")]),e._v(" selects the mode for controlling the paddle positions.\npossible selections are: absolute position (via input port), speed (via input port) or single events.")]),e._v(" "),n("li",[n("strong",[e._v("speedStep [double]:")]),e._v(" defines the amount of movement caused by one event.")]),e._v(" "),n("li",[n("strong",[e._v("goalsToWin [double]:")]),e._v(" number of goals to win a game (player lives).")]),e._v(" "),n("li",[n("strong",[e._v("eventsToCaloryMultiplier [double]:")]),e._v(" factor to calculate energy (in calories) from incoming events (especially for the bike ergometer application) Setting this property value to 0 deactivates the energy calculation and the respective game report screens (default).")]),e._v(" "),n("li",[n("strong",[e._v("goalScoreBase [integer]:")]),e._v(" game points for one goal.")]),e._v(" "),n("li",[n("strong",[e._v("touchScoreBase [integer]:")]),e._v(" game points for one ball hit.")]),e._v(" "),n("li",[n("strong",[e._v("resetWaitTime [integer]:")]),e._v(" time to wait before resetting game screen.")]),e._v(" "),n("li",[n("strong",[e._v("maxSpeed [double]:")]),e._v(" the maximum speed of the ball.")]),e._v(" "),n("li",[n("strong",[e._v("minXSpeed [double]:")]),e._v(" the minimum X speed of the ball (to avoid deadlocks of the gameplay).")]),e._v(" "),n("li",[n("strong",[e._v("reflectionYImpulse [double]:")]),e._v(" speed impluse gained from a vertical reflection of the ball.")]),e._v(" "),n("li",[n("strong",[e._v("soundFilePaddleTouch [string]:")]),e._v(" a wav file which is played when the ball touches a paddle.")]),e._v(" "),n("li",[n("strong",[e._v("soundFileBoundsTouch [string]:")]),e._v(" a wav file which is played when the ball touches the vertical bounds.")]),e._v(" "),n("li",[n("strong",[e._v("soundFileGoal [string]:")]),e._v(" a wav file which is played when a player missed a ball.")]),e._v(" "),n("li",[n("strong",[e._v("soundFileEndGame [string]:")]),e._v(" a wav file which is played when the game is over.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);