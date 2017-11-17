class FileRead():
  def readFile(self):
    with open('./shellscripts/deploy.sh') as file_object:
      content = file_object.readlines()
    for line in content:
fileRead = FileRead()
fileRead.readFile()
