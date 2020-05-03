(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1369:function(e,t,n){"use strict";n.r(t);var r=n(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"create-encog-eg-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-encog-eg-file"}},[e._v("#")]),e._v(" Create Encog EG file")]),e._v(" "),r("p",[e._v("This document describe how to create sample "),r("a",{attrs:{href:"http://www.heatonresearch.com/encog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Encog framework"),r("OutboundLink")],1),e._v(" EG file that store neural network. The example shown how to create the basic neural network that performs XOR operation.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Download the encog-workbench-3.0.1-release.zip package from the "),r("a",{attrs:{href:"http://www.heatonresearch.com/encog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Encog page"),r("OutboundLink")],1),e._v(", unzip it and run the Encog Workbench using command: “java -jar encog-workbench-3.0.1-executable.jar”. Create new folder for the project.")])]),e._v(" "),r("li",[r("p",[e._v("To create Neural network, select “File > New file…”. Select: the “Machine Learning Method (*.eg)” and enter name of the EG file. Then, select the “Feedforward Neural Network” and click OK. On the next window, enter 2 into the “Input Neuron Count” text box. Click Add and enter 4 neurons for the hidden layer. enter 1 into the “Output Neuron Count” text box. Change the Activation Function Hidden and Activation Function Output to the Activation Sigmoid. Then, click OK.")])])]),e._v(" "),r("p",[r("img",{attrs:{src:n(2837),alt:"Thestructure of the neural network",title:"The structure of the\n          neural network"}}),r("br"),e._v("\nThe structure of the neural network")]),e._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[e._v("Next step is to create the Training File. Select “File > New file…”. Select: “Training File (*.egb)” and enter name of the EGB file. Click OK. On the next window, enter 4 into the the “Training Set Elements” text box, enter 2 into the “Input Field Count” text box, enter 1 into the “Output Field Count” text box. Click OK. Click on the file and fill the table for the XOR operation.")])]),e._v(" "),r("p",[r("img",{attrs:{src:n(2838),alt:"Thetraining set",title:"The training set"}}),r("br"),e._v("\nThe training set")]),e._v(" "),r("ol",{attrs:{start:"11"}},[r("li",[e._v("When the training set is ready, the neural network can be trained. Click on the neural network file and choose the “Train” option. In the Training Set select the training file, in the Neural Network select the neural network file and click OK. Select the Propagation - Resilient (RPROP) training method and click OK. Enter 0.01 into the Maximum Error Percent(0-100) box, choose the RPROP type: “RPROP+ (classic)” and click OK. Click the Start button to Train the network. When the Max Error is reached click Close.")])]),e._v(" "),r("p",[e._v("The neural network file can be loaded by the "),r("a",{attrs:{href:"NeuralNetworkLoader.htm"}},[e._v("Neural Network Loader")]),e._v(" plugin.To load the neural network, enter the EG file path into the filePath plugin property. For this example, the input1 input port and the input2 input port will send the input data for the neural network and the output1 output port will give the XOR operation result.")])])}),[],!1,null,null,null);t.default=o.exports},2837:function(e,t,n){e.exports=n.p+"assets/img/NeuralNetwork.42205768.jpg"},2838:function(e,t,n){e.exports=n.p+"assets/img/TrainingSet.7427e719.jpg"}}]);