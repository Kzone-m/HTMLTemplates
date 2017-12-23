Windows  
   
https://github.com/hiko2msp/play_with_parrot_mambo  
  
  
(1)Git Bash  
http://gitforwindows.org  
・ダウンロード  
・Search Git Bash  
・Open Git Bash  
・git --version  
  
(2)Node  
https://nodejs.org/ja/  
・ダウンロード  
・node -v  
・npm -v  
  
  
(3) ソースのダウンロードとbuild toolの構築  
管理者権限@Git Bash(右クリック)  
$ git clone https://github.com/hiko2msp/play_with_parrot_mambo.git  
$ cd play_with_parrot_mambo  
$ npm install  
$ npm install --global --production windows-build-tools
$ npm install git clone https://github.com/hiko2msp/DroneJS.git  
$ npm install bluetooth-hci-socket  
$ mv DroneJS node_modules/dronejs  
$ node find.js  
  
  
(4)Python環境の設定  
$ conda create -n py3.5 python=3.5 anaconda  
$ source activate py3.5  
$ pip install --upgrade --ignore-installed -r requirements.txt  
  
(5)ZADIG  
http://zadig.akeo.ie  
・ダウンロード  
・Optionメニュー  
・List All Devices  
・CSR8510 A10  
・Win USB  
・Replace Driver  
  
(6)ドローンを飛ばす  
$ node winSample.js  

  
# MAC   
(0)Pythonを入れる前の設定  
$ xcode-select --install  
  
(1)Node  
https://nodejs.org/ja/  
$ node -v $ npm -v    
  
(2)Git  
https://git-scm.com  
$ git  --version  
  
(3)Anaconda and NPM  
https://www.anaconda.com/download/#macos  
$ conda create -n py3.5 python=3.5 anaconda  
$ conda create -n py2.7 python=2.7         
$ git clone https://github.com/hiko2msp/play_with_parrot_mambo  
$ cd play_with_parrot_mambo  
$ source activate py2.7  
$ npm install  
$ cd node_modules  
$ git clone https://github.com/hiko2msp/DroneJS.git dronejs  
$ cd ../  
$ source deactivate py2.7  
  
$ source activate py3.5  
$ pip install --upgrade --ignore-installed -r requirements.txt  
$ source deactivate py3.5  


$ node find.js
$ node macSample.js

https://community.parrot.com/t5/Mambo-Knowledge-Base/Update-Parrot-Mambo-Software/ta-p/153647
