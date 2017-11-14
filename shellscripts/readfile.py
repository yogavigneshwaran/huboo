class FileRead():
  def readFile(self):
    with open('/home/yoga/huboo/shellscripts/deploy.sh') as file_object:
      content = file_object.readlines()
    for line in content:
      print(line);
fileRead = FileRead()
fileRead.readFile()
